import React from 'react';
import './MembersList.scss';
import GroupsV2 from '../BungieAPI/GroupsV2/GroupsV2';
import MembersListItem from './MembersListItem';
import IGroupMember from '../BungieAPI/GroupsV2/IGroupMember';

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