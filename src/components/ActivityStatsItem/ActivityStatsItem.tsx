import React from 'react';
import './ActivityStatsItem.scss';

class ActivityStatsItem extends React.Component {
    render() {
        return (
            <article className="ActivityStatsItem">
                <header>
                    <img className="ActivityStatsItem__avatar" alt="" src="https://www.bungie.net/img/profile/avatars/cc24.jpg"/>
                </header>
                <main className="ActivityStatsItem__main">
                    <section className="ActivityStatsItem__names">
                        <span className="ActivityStatsItem__names__main">BOBRoVICE</span>
                        <span className="ActivityStatsItem__names__bnet">Bnet: BOBROVICE</span>
                    </section>
                    <section className="ActivityStatsItem__stat">
                        <article className="ActivityStatsItem__stat__name">Kills:</article>
                        <article className="ActivityStatsItem__stat__value">100</article>
                    </section>
                    <section className="ActivityStatsItem__stat">
                        <article className="ActivityStatsItem__stat__name">Deaths:</article>
                        <article className="ActivityStatsItem__stat__value">100</article>
                    </section>
                    <section className="ActivityStatsItem__stat">
                        <article className="ActivityStatsItem__stat__name">Assists:</article>
                        <article className="ActivityStatsItem__stat__value">100</article>
                    </section>
                    <section className="ActivityStatsItem__stat">
                        <article className="ActivityStatsItem__stat__name">MVP:</article>
                        <article className="ActivityStatsItem__stat__value">3/6</article>
                    </section>
                </main>
            </article>
        );
    }
}

export default ActivityStatsItem;