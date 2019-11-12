import React from 'react';
import IGroupMember from '../BungieAPI/GroupsV2/IGroupMember';
import './MembersListItem.scss';


interface IMembersListItemProps {
    member: IGroupMember
}

interface IMemberListItemState {

}

export default class MembersListItem extends React.Component<IMembersListItemProps, IMemberListItemState>{

    render() {
        return (
            <div className="MembersList__item MembersListItem">
                <span className="MembersListItem__name">{this.props.member.bungieNetUserInfo.displayName}</span>
                <span className="MembersListItem__online">Online: {this.props.member.isOnline ? "true" : "false"}</span>
                <img alt='' className="MembersListItem__icon" src={'https://www.bungie.net'+this.props.member.bungieNetUserInfo.iconPath}/>
            </div>
        );
    }
}