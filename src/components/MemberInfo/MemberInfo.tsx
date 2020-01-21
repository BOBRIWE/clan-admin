import React from 'react';
import './MemberInfo.scss';
import {IMemberInfoContainerProps} from '../../containers/MemberInfoContainer';
import DestinyComponentType from '../../BungieAPI/Destiny/DestinyComponentType';
import BungieMembershipType from '../../BungieAPI/BungieMembershipType';
import ActivityModeType from '../../BungieAPI/Destiny/Definitions/ActivityModeType';
import ActivityStatsContainer from '../../containers/ActivityStatsContainer';

interface IMemberInfoProps extends IMemberInfoContainerProps {

}

interface IMemberInfoState {
    currentId: string
}

class MemberInfo extends React.Component<IMemberInfoProps, IMemberInfoState> {
    constructor(props: IMemberInfoProps) {
        super(props);

        this.state = {
            currentId: ''
        };
    }

    componentDidMount(): void {
        this.props.memberInfoFetch(this.props.selectedMember, DestinyComponentType.Profiles, BungieMembershipType.TigerSteam, ActivityModeType.Raid);
        this.setState({currentId: this.props.selectedMember});
    }

    componentDidUpdate(prevProps: Readonly<IMemberInfoProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.state.currentId !== this.props.selectedMember) {
            this.props.memberInfoFetch(this.props.selectedMember, DestinyComponentType.Profiles, BungieMembershipType.TigerSteam, ActivityModeType.Raid);
            this.setState({currentId: this.props.selectedMember});
        }
    }

    render() {
        return (
            <section className="MemberInfo" style={{backgroundImage: `url(${'https://www.bungie.net/img/destiny_content/pgcr/raids.1305rh0093145r13t5hn10tnz.raid_sunset.jpg'})`}}>
                <header className="MemberInfo__header">
                    { this.props.memberInfoLinkedAccounts && this.props.memberInfoLinkedAccounts.profiles
                        ? <span className="MemberInfo__name">{this.props.memberInfoLinkedAccounts.profiles[0].displayName}</span>
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
                        this.props.activityHistories.length > 0 ? <ActivityStatsContainer  activityId={this.props.activityHistories[0].activities[0].activityDetails.instanceId}/>
                            : null
                    }
                </main>
            </section>
        );
    }
}

export default MemberInfo;