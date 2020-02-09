import React from 'react';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import './MembersListGroupItem.scss';
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

interface IMembersListGroupItemProps {
    member: IGroupMember
    definitions: ISupportedDefinitions
    onClick: (e: React.MouseEvent) => void
}

interface IMemberListGroupItemState {
    profile: ISingleComponentResponseOfDestinyProfileComponent | null
    activities: IDestinyHistoricalStatsPeriodGroup[]
    lastActivityReport: IDestinyPostGameCarnageReportData | null
    isFinished: boolean | null
}

export default class MembersListGroupItem extends React.Component<IMembersListGroupItemProps, IMemberListGroupItemState> {
    constructor(props: IMembersListGroupItemProps) {
        super(props);

        this.state = {
            profile: null,
            activities: [],
            lastActivityReport: null,
            isFinished: null
        };
    }

    async componentDidMount(): Promise<void> {
        try {
            const { membershipId, membershipType } = this.props.member.destinyUserInfo;
            const profile = (await Destiny2.getProfile(membershipId.toString())).profile;

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
                lastActivityReport: postGameReport,
                isFinished: isFinished
            });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <section className="MembersListGroup__item MembersListGroupItem" onClick={this.props.onClick}>
                <article className="MembersListGroupItem__avatar">
                    <img alt='' src={'https://www.bungie.net' + this.props.member.bungieNetUserInfo.iconPath}/>
                </article>

                <article className="MembersListGroupItem__body">
                    <article className="MembersListGroupItem__name">
                        <span
                            className="MembersListGroupItem__name__main">
                            {this.props.member.destinyUserInfo.displayName}
                        </span>
                        <span
                            className="MembersListGroupItem__name__bnet">
                            {'Bnet: ' + this.props.member.bungieNetUserInfo.displayName}
                        </span>
                    </article>
                    {
                        this.state.profile !== null ?
                            (
                                <article className="MembersListGroupItem__body__item MembersListGroupItem__last-played">
                                    <span className="MembersListGroupItem__body__item__header">Last Played</span>
                                    <span className="MembersListGroupItem__body__item__caption">{new DateFormatter(this.state.profile.data.dateLastPlayed).timeAgo}</span>
                                </article>
                            )
                            :
                            <article className="MembersListGroupItem__body__item MembersListGroupItem__last-played"/>
                    }

                    {
                        this.state.lastActivityReport !== null && this.props.definitions !== null ?
                            (
                                <article className="MembersListGroupItem__body__item MembersListGroupItem__last-activity">
                                    <span className="MembersListGroupItem__body__item__header">Last Raid</span>
                                    <span className="MembersListGroupItem__body__item__caption">
                                        {this.props.definitions.DestinyActivityDefinition[this.state.lastActivityReport.activityDetails.referenceId].displayProperties.name}
                                    </span>
                                </article>
                            )
                            :
                            <article className="MembersListGroupItem__body__item MembersListGroupItem__last-activity"/>
                    }

                    {
                        this.state.lastActivityReport !== null ?
                            (
                                <article className="MembersListGroupItem__body__item MembersListGroupItem__activity-played">
                                    <span className="MembersListGroupItem__body__item__header">Raid Played</span>
                                    <span className="MembersListGroupItem__body__item__caption">{new DateFormatter(this.state.lastActivityReport.period).timeAgo}</span>
                                </article>
                            )
                            :
                            <article className="MembersListGroupItem__body__item MembersListGroupItem__activity-played"/>
                    }

                    {
                        this.state.isFinished !== null ?
                            (
                                <article className="MembersListGroupItem__body__item MembersListGroupItem__finished">
                                    <span className="MembersListGroupItem__body__item__header">Finished</span>
                                    {
                                        this.state.isFinished ?
                                            <span className="MembersListGroupItem__body__item__caption MembersListGroupItem__finished__yes">yes</span>
                                            :
                                            <span className="MembersListGroupItem__body__item__caption MembersListGroupItem__finished__no">no</span>
                                    }
                                </article>
                            )
                            :
                            <article className="MembersListGroupItem__body__item MembersListGroupItem__finished"/>
                    }

                </article>
            </section>
        );
    }
}