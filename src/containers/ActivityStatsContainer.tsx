import {connect} from 'react-redux';
import React from 'react';
import {IRootReducer} from '../reducers';
import {memberInfoPostGameCarnageReportFetch, memberInfoProfileFetch} from '../store/memberInfo/actions';
import ActivityStats from '../components/ActivityStats/ActivityStats';
import IDestinyPostGameCarnageReportData from '../BungieAPI/Destiny/HistoricalStats/IDestinyPostGameCarnageReportData';

export interface IActivityStatsContainerProps {
    activityId: string
    postGameCarnageReport: IDestinyPostGameCarnageReportData | null
    postGameCarnageReportFetch: (id: string) => void
}

interface IActivityStatsContainerState extends IRootReducer {

}

function ActivityStatsContainer(props: IActivityStatsContainerProps) {
    return <ActivityStats {...props} />;
}

function mapStateToProps (state: IActivityStatsContainerState) {
    return {
        postGameCarnageReport: state.memberInfo.postGameCarnageReport
    };
}

export default connect(mapStateToProps, {
    memberInfoFetch: memberInfoProfileFetch,
    postGameCarnageReportFetch: memberInfoPostGameCarnageReportFetch
})(ActivityStatsContainer);