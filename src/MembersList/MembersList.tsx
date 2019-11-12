import React from 'react';
import './MembersList.scss';
import GroupsV2 from '../BungieAPI/GroupsV2/GroupsV2';
import MembersListItem from './MembersListItem';
import IGroupMember from '../BungieAPI/GroupsV2/IGroupMember';
import Destiny2 from '../BungieAPI/Destiny2/Destiny2';
import BungieMembershipType from '../BungieAPI/BungieMembershipType';
import DestinyComponentType from '../BungieAPI/Destiny/DestinyComponentType';
import ActivityModeType from '../BungieAPI/Destiny/Definitions/ActivityModeType';
import Request from '../BungieAPI/Request';

interface IMembersListProps {
}

interface IMembersListState {
    members: IGroupMember[]
}

class MembersList extends React.Component<IMembersListProps, IMembersListState> {
    constructor(props: object) {
        super(props);
        this.state = {members: []};

        const clanMembers = GroupsV2.getClanMembers(3990079);

        clanMembers.then((members) => {
            this.setState({
                members: members.results.map((member) => member)
            });
        });

        let banned = GroupsV2.getBannedMembersOfGroup(3990079);

        banned.then((banned) => {
            console.log(banned);
        });

        // let userAccounts = Destiny2.getLinkedProfiles(18454839, BungieMembershipType.All);
        // userAccounts.then((userAccounts) => {
        //     let profile = Destiny2.getProfile(userAccounts.profiles[0].membershipId, DestinyComponentType.Profiles, BungieMembershipType.TigerSteam);
        //     profile.then((profile) => {
        //         let history = Destiny2.getActivityHistory(userAccounts.profiles[0].membershipId, profile.profile.data.characterIds[0], ActivityModeType.Raid);
        //         history.then((history) => {
        //             let activityStats = Destiny2.getPostGameCarnageReport(history.activities[0].activityDetails.instanceId);
        //             activityStats.then((activityStats) => {
        //                 console.log(activityStats);
        //             });
        //         });
        //     });
        // });


        let token = Request.getAccessToken();
        token.then((token) => {
            console.log(token);
        });
    }

    render() {
        return (
            <section className="MembersList">
                {this.state.members.map(function(member) {
                    return <MembersListItem member={member} />;
                })}
            </section>
        );
    }
}

export default MembersList;