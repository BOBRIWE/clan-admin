import React from 'react';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import './MembersListItem.scss';


interface IMembersListItemProps {
    member: IGroupMember
}

interface IMemberListItemState {

}

export default class MembersListItem extends React.Component<IMembersListItemProps, IMemberListItemState>{

    render() {
        return (
            <section className="MembersList__item MembersListItem">
                <article className="MembersListItem__avatar">
                    <img alt='' src={'https://www.bungie.net'+this.props.member.bungieNetUserInfo.iconPath}/>
                </article>

                <article className="MembersListItem__body">
                    <article className="MembersListItem__name">
                        <span className="MembersListItem__name__main">{this.props.member.destinyUserInfo.displayName}</span>
                        <span className="MembersListItem__name__bnet">{'Bnet: ' + this.props.member.bungieNetUserInfo.displayName}</span>
                    </article>
                </article>
            </section>
        );
    }
}