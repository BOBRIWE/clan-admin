import React from 'react';
import './MemberInfo.scss';
import {IMemberInfoContainerProps} from '../../containers/MemberInfoContainer';
import DestinyComponentType from '../../BungieAPI/Destiny/DestinyComponentType';
import BungieMembershipType from '../../BungieAPI/BungieMembershipType';
import ActivityModeType from '../../BungieAPI/Destiny/Definitions/ActivityModeType';
import ActivityStatsContainer from '../../containers/ActivityStatsContainer';
import ActivityChart from '../ActivityChart/ActivityChart';

interface IMemberInfoProps extends IMemberInfoContainerProps {

}

interface IMemberInfoState {
    currentActivivtyId: string | null
}

class MemberInfo extends React.Component<IMemberInfoProps, IMemberInfoState> {
    constructor(props: IMemberInfoProps) {
        super(props);

        this.state = {
            currentActivivtyId: null
        };
    }

    componentDidMount(): void {
        this.props.memberInfoFetch(this.props.selectedMember, DestinyComponentType.Profiles, BungieMembershipType.TigerSteam, ActivityModeType.Raid, 0, 250);
    }

    componentDidUpdate(prevProps: Readonly<IMemberInfoProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.state.currentActivivtyId === null && this.props.activityHistories.length > 0) {
            this.setState({currentActivivtyId: this.props.activityHistories[0].activityDetails.instanceId});
        }
        if (prevProps.selectedMember !== this.props.selectedMember) {
            this.props.memberInfoFetch(this.props.selectedMember, DestinyComponentType.Profiles, BungieMembershipType.TigerSteam, ActivityModeType.Raid, 0, 25);
            this.setState({currentActivivtyId: null});
        }
    }

    updateActivityStats(id: string) {
        this.setState({currentActivivtyId: id});
    }

    render() {
        let raidIconPath = '';
        if (this.props.definitions !== null && this.state.currentActivivtyId !== null) {
            const currActivity = this.props.activityHistories.find((item) => {
                return item.activityDetails.instanceId === this.state.currentActivivtyId;
            });

            if (currActivity !== undefined) {
                raidIconPath = this.props.definitions.DestinyActivityDefinition[currActivity.activityDetails.referenceId].pgcrImage;
            }
        }


        return (
            <section className="MemberInfo" style={{backgroundImage: `url(https://www.bungie.net${raidIconPath})`}}>
                <header className="MemberInfo__header">
                    { this.props.memberInfoDestinyProfile && this.props.memberInfoDestinyProfile.profile !== null
                        ? <span className="MemberInfo__name">{this.props.memberInfoDestinyProfile.profile.data.userInfo.displayName}</span>
                        : null
                    }

                    {
                        // this.props.generalUser && this.props.generalUser.firstAccess
                        //     ? <span className="MemberInfo__age">{new DateFormatter(this.props.generalUser.firstAccess).timeAgo} in bnet</span>
                        //     : null
                    }
                </header>
                <main>
                    {
                        this.props.activityHistories.length > 0 ?
                            <ActivityChart onPointClicked={this.updateActivityStats.bind(this)} activityData={this.props.activityHistories}/>
                            :
                            null
                    }
                    {
                        this.props.activityHistories.length > 0 && this.state.currentActivivtyId !== null ?
                            <ActivityStatsContainer
                                activityId={this.state.currentActivivtyId}
                            />
                            : null
                    }
                </main>
            </section>
        );
    }
}

export default MemberInfo;