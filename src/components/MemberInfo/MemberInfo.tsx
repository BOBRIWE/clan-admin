import React from 'react';
import './MemberInfo.scss';
import ActivityStats from '../ActivityStats/ActivityStats';
import {IMemberInfoContainerProps} from '../../containers/MemberInfoContainer';
import DateFormatter from '../../Helpers/DateFormatter';

interface IMemberInfoProps extends IMemberInfoContainerProps {

}

class MemberInfo extends React.Component<IMemberInfoProps> {
    componentDidMount(): void {
        this.props.userLinkedAccountsFetch(18454839);
        this.props.generalUserFetch(18454839);
    }

    render() {
        return (
            <section className="MemberInfo" style={{backgroundImage: `url(${'https://www.bungie.net/img/destiny_content/pgcr/raids.1305rh0093145r13t5hn10tnz.raid_sunset.jpg'})`}}>
                <header className="MemberInfo__header">
                    { this.props.userLinkedAccounts && this.props.userLinkedAccounts.profiles
                        ? <span className="MemberInfo__name">{this.props.userLinkedAccounts.profiles[0].displayName}</span>
                        : null
                    }

                    {
                        this.props.generalUser && this.props.generalUser.firstAccess
                            ? <span className="MemberInfo__age">{new DateFormatter(this.props.generalUser.firstAccess).timeAgo} in bnet</span>
                            : null
                    }
                </header>
                <main>
                    <ActivityStats/>
                </main>
            </section>
        );
    }
}

export default MemberInfo;