import React from 'react';
import './MembersList.scss';
import MembersListItem from './MembersListItem';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';

interface IMembersListProps {
    members: IGroupMember[]
}

interface IMembersListState {
}

class MembersList extends React.Component<IMembersListProps, IMembersListState> {
    render() {
        return (
            <article className="MembersList">
                {
                    this.props.members.map((member) => {
                        return <MembersListItem key={member.bungieNetUserInfo.membershipId} member={member} />;
                    })
                }
            </article>
        );
    }
}

export default MembersList;