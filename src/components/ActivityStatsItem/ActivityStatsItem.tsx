import React from 'react';
import './ActivityStatsItem.scss';
import IDestinyPostGameCarnageReportEntry
    from '../../BungieAPI/Destiny/HistoricalStats/IDestinyPostGameCarnageReportEntry';

interface IActivityStatsItemProps {
    member: IDestinyPostGameCarnageReportEntry
}

class ActivityStatsItem extends React.Component<IActivityStatsItemProps> {
    render() {
        const {member} = this.props;
        return (
            <article className={`ActivityStatsItem ${member.values['completed'].basic.displayValue === 'Yes' ? '' : 'ActivityStatsItem--not-finished'}`}>
                <header>
                    <img className="ActivityStatsItem__avatar" alt="" src={`https://www.bungie.net${member.player.destinyUserInfo.iconPath}`}/>
                </header>
                <main className="ActivityStatsItem__main">
                    <section className="ActivityStatsItem__names">
                        <span className="ActivityStatsItem__names__main">{member.player.destinyUserInfo.displayName}</span>
                        <span className="ActivityStatsItem__names__bnet">Bnet: {member.player.destinyUserInfo.supplementalDisplayName}</span>
                    </section>
                    <section className="ActivityStatsItem__stat">
                        <article className="ActivityStatsItem__stat__name">Kills:</article>
                        <article className="ActivityStatsItem__stat__value">{member.values['kills'].basic.displayValue}</article>
                    </section>
                    <section className="ActivityStatsItem__stat">
                        <article className="ActivityStatsItem__stat__name">Deaths:</article>
                        <article className="ActivityStatsItem__stat__value">{member.values['deaths'].basic.displayValue}</article>
                    </section>
                    <section className="ActivityStatsItem__stat">
                        <article className="ActivityStatsItem__stat__name">Assists:</article>
                        <article className="ActivityStatsItem__stat__value">{member.values['assists'].basic.displayValue}</article>
                    </section>
                    <section className="ActivityStatsItem__stat">
                        <article className="ActivityStatsItem__stat__name">MVP:</article>
                        <article className="ActivityStatsItem__stat__value">{member.values['teamScore'].basic.displayValue}</article>
                    </section>
                </main>
            </article>
        );
    }
}

export default ActivityStatsItem;