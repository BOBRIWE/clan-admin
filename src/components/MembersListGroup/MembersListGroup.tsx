import React from 'react';
import './MembersListGroup.scss';
import MembersListGroupItem from './MembersListGroupItem';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import {ISupportedDefinitions} from '../../BungieAPI/Destiny/Definitions/SupportedDefinitions';

interface IMembersListProps {
    members: IGroupMember[]
    groupName: string
    definitions: ISupportedDefinitions
    selectUserCallback: (id: string) => void
}

interface IMembersListState {
}

class MembersListGroup extends React.Component<IMembersListProps, IMembersListState> {
    render() {
        return (
            <article className="MembersListGroup">
                <span className="MembersListGroup__header">{this.props.groupName}</span>
                {
                    this.props.members.map((member) => {
                        return <MembersListGroupItem
                            onClick={() => {
                                this.props.selectUserCallback(member.destinyUserInfo.membershipId);
                            }}
                            key={member.bungieNetUserInfo.membershipId}
                            member={member}
                            definitions={this.props.definitions}
                        />;
                    })
                }
            </article>
        );
    }
}

export default MembersListGroup;