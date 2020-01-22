import React from 'react';
import './ActivityStats.scss';
import ActivityStatsItem from '../ActivityStatsItem/ActivityStatsItem';
import SectionHeader from '../SectionHeader/SectionHeader';
import {IActivityStatsContainerProps} from '../../containers/ActivityStatsContainer';

interface IActivityStatsProps extends IActivityStatsContainerProps {
    activityId: string
}

class ActivityStats extends React.Component<IActivityStatsProps> {
    componentDidMount(): void {
        this.props.postGameCarnageReportFetch(this.props.activityId);
    }

    componentDidUpdate(prevProps: Readonly<IActivityStatsProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.activityId !== this.props.activityId) {
            this.props.postGameCarnageReportFetch(this.props.activityId);
        }
    }

    render() {
        return (
            <section className="ActivityStats">

                <SectionHeader title={'Last raid stats'}/>

                {
                    this.props.postGameCarnageReport !== null ?
                        this.props.postGameCarnageReport.entries.map((member) => {
                            return <ActivityStatsItem key={member.player.destinyUserInfo.membershipId} member={member}/>;
                        })
                        : null
                }
            </section>
        );
    }
}

export default ActivityStats;