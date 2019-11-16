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
                    <article className="MembersListItem__body__item MembersListItem__last-played">
                        <span className="MembersListItem__body__item__header">Last Played</span>
                        <span className="MembersListItem__body__item__caption">1 hour ago</span>
                    </article>
                    <article className="MembersListItem__body__item MembersListItem__last-activity">
                        <span className="MembersListItem__body__item__header">Last Raid</span>
                        <span className="MembersListItem__body__item__caption">Garden of Salvation</span>
                    </article>
                    <article className="MembersListItem__body__item MembersListItem__activity-played">
                        <span className="MembersListItem__body__item__header">Raid Played</span>
                        <span className="MembersListItem__body__item__caption">2 days ago</span>
                    </article>
                    <article className="MembersListItem__body__item MembersListItem__finished">
                        <span className="MembersListItem__body__item__header">Finished</span>
                        <span className="MembersListItem__body__item__caption MembersListItem__finished__yes">yes</span>
                    </article>
                </article>
            </section>
        );
    }
}