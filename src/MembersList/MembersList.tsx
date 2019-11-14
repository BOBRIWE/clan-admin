import React from 'react';
import './MembersList.scss';
import GroupsV2 from '../BungieAPI/GroupsV2/GroupsV2';
import MembersListItem from './MembersListItem';
import IGroupMember from '../BungieAPI/GroupsV2/IGroupMember';

interface IMembersListProps {
    clanId: number
}

interface IMembersListState {
    members: IGroupMember[]
}

class MembersList extends React.Component<IMembersListProps, IMembersListState> {
    constructor(props: IMembersListProps) {
        super(props);
        this.state = {members: []};
    }

    componentDidMount(): void {

        const clId = this.props.clanId;

        const clanMembers = GroupsV2.getClanMembers(clId);

        clanMembers.then((members) => {
            this.setState({
                members: members.results.map((member) => member)
            });
        });
    }

    render() {
        return (
            <section className="MembersList">
                {
                    this.state.members.map((member) => {
                        return <MembersListItem key={member.bungieNetUserInfo.membershipId} member={member} />;
                    })
                }
            </section>
        );
    }
}

export default MembersList;