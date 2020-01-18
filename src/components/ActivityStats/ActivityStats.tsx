import React from 'react';
import './ActivityStats.scss';
import ActivityStatsItem from '../ActivityStatsItem/ActivityStatsItem';
import SectionHeader from '../SectionHeader/SectionHeader';

class ActivityStats extends React.Component {
    render() {
        return (
            <section className="ActivityStats">
                <SectionHeader title={'Last raid stats'}/>
                <ActivityStatsItem/>
                <ActivityStatsItem/>
                <ActivityStatsItem/>
                <ActivityStatsItem/>
                <ActivityStatsItem/>
                <ActivityStatsItem/>
            </section>
        );
    }
}

export default ActivityStats;