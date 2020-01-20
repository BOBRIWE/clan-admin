import React from 'react';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import './MembersListItem.scss';
import Destiny2 from "../../BungieAPI/Destiny2/Destiny2";
import ISingleComponentResponseOfDestinyProfileComponent
    from "../../BungieAPI/ISingleComponentResponseOfDestinyProfileComponent";
import DateFormatter from "../../Helpers/DateFormatter";
import ActivityModeType from "../../BungieAPI/Destiny/Definitions/ActivityModeType";
import IDestinyHistoricalStatsPeriodGroup
    from "../../BungieAPI/Destiny/HistoricalStats/IDestinyHistoricalStatsPeriodGroup";
import IDestinyActivityDefinition from "../../BungieAPI/Destiny/Definitions/IDestinyActivityDefinition";
import IDestinyPostGameCarnageReportData
    from "../../BungieAPI/Destiny/HistoricalStats/IDestinyPostGameCarnageReportData";
import {ISupportedDefinitions} from '../../BungieAPI/Destiny/Definitions/SupportedDefinitions';

interface IMembersListItemProps {
    member: IGroupMember
    definitions: ISupportedDefinitions
}

interface IMemberListItemState {
    profile: ISingleComponentResponseOfDestinyProfileComponent | null
    activities: IDestinyHistoricalStatsPeriodGroup[]
    activityDefinitions: {[key: number]: IDestinyActivityDefinition} | null
    lastActivityReport: IDestinyPostGameCarnageReportData | null
    isFinished: boolean | null
}

export default class MembersListItem extends React.Component<IMembersListItemProps, IMemberListItemState> {
    constructor(props: IMembersListItemProps) {
        super(props);

        this.state = {
            profile: null,
            activityDefinitions: null,
            activities: [],
            lastActivityReport: null,
            isFinished: null
        };
    }

    async componentDidMount(): Promise<void> {
        try {
            const { membershipId, membershipType } = this.props.member.destinyUserInfo;
            const profile = (await Destiny2.getProfile(membershipId.toString())).profile;
            let activityDefinitions = null;
            let activityDefinitionsReq = this.props.definitions;
            if (activityDefinitionsReq !== undefined) {
                activityDefinitions = activityDefinitionsReq.DestinyActivityDefinition;
            }

            let activities: IDestinyHistoricalStatsPeriodGroup[] = [];

            for (let index = 0; index < profile.data.characterIds.length; index++) {
                const moreActivities = await Destiny2.getActivityHistory(membershipId.toString(), profile.data.characterIds[index], ActivityModeType.Raid, 0, 250, membershipType);

                if (moreActivities.activities === undefined) {
                    continue;
                }

                activities = activities.concat(moreActivities.activities);
            }

            activities.sort((a, b) => {
                return new Date(b.period).getTime() - new Date(a.period).getTime();
            });

            let postGameReport = null;
            let isFinished = null;
            if (activities.length !== 0) {
                postGameReport = await Destiny2.getPostGameCarnageReport(activities[0].activityDetails.instanceId);
                const player = postGameReport.entries.find((entry) => {
                    return entry.player.destinyUserInfo.membershipId === this.props.member.destinyUserInfo.membershipId;
                });

                isFinished = (player !== undefined && player.values['completed'].basic.displayValue === 'Yes');
            }

            this.setState({
                profile: profile,
                activities: activities,
                activityDefinitions: activityDefinitions,
                lastActivityReport: postGameReport,
                isFinished: isFinished
            });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <section className="MembersList__item MembersListItem">
                <article className="MembersListItem__avatar">
                    <img alt='' src={'https://www.bungie.net' + this.props.member.bungieNetUserInfo.iconPath}/>
                </article>

                <article className="MembersListItem__body">
                    <article className="MembersListItem__name">
                        <span
                            className="MembersListItem__name__main">
                            {this.props.member.destinyUserInfo.displayName}
                        </span>
                        <span
                            className="MembersListItem__name__bnet">
                            {'Bnet: ' + this.props.member.bungieNetUserInfo.displayName}
                        </span>
                    </article>
                    {
                        this.state.profile !== null ?
                            (
                                <article className="MembersListItem__body__item MembersListItem__last-played">
                                    <span className="MembersListItem__body__item__header">Last Played</span>
                                    <span className="MembersListItem__body__item__caption">{new DateFormatter(this.state.profile.data.dateLastPlayed).timeAgo}</span>
                                </article>
                            )
                            :
                            <article className="MembersListItem__body__item MembersListItem__last-played"/>
                    }

                    {
                        this.state.lastActivityReport !== null && this.state.activityDefinitions !== null ?
                            (
                                <article className="MembersListItem__body__item MembersListItem__last-activity">
                                    <span className="MembersListItem__body__item__header">Last Raid</span>
                                    <span className="MembersListItem__body__item__caption">
                                        {this.state.activityDefinitions[this.state.lastActivityReport.activityDetails.referenceId].displayProperties.name}
                                    </span>
                                </article>
                            )
                            :
                            <article className="MembersListItem__body__item MembersListItem__last-activity"/>
                    }

                    {
                        this.state.lastActivityReport !== null ?
                            (
                                <article className="MembersListItem__body__item MembersListItem__activity-played">
                                    <span className="MembersListItem__body__item__header">Raid Played</span>
                                    <span className="MembersListItem__body__item__caption">{new DateFormatter(this.state.lastActivityReport.period).timeAgo}</span>
                                </article>
                            )
                            :
                            <article className="MembersListItem__body__item MembersListItem__activity-played"/>
                    }

                    {
                        this.state.isFinished !== null ?
                            (
                                <article className="MembersListItem__body__item MembersListItem__finished">
                                    <span className="MembersListItem__body__item__header">Finished</span>
                                    {
                                        this.state.isFinished ?
                                            <span className="MembersListItem__body__item__caption MembersListItem__finished__yes">yes</span>
                                            :
                                            <span className="MembersListItem__body__item__caption MembersListItem__finished__no">no</span>
                                    }
                                </article>
                            )
                            :
                            <article className="MembersListItem__body__item MembersListItem__finished"/>
                    }

                </article>
            </section>
        );
    }
}