import {connect} from 'react-redux';
import React from 'react';
import {IRootReducer} from '../reducers';
import {IUserState} from '../store/user/types';
import ActivityStats from '../components/ActivityStats/ActivityStats';

export interface IActivityStatsContainerProps extends IUserState {
    activityReportFetch: (id: number) => void
}

interface IActivityStatsContainerState extends IRootReducer {

}

function ActivityStatsContainer(props: IActivityStatsContainerProps) {
    return <ActivityStats {...props}/>
}

function mapStateToProps (state: IActivityStatsContainerState) {
    return {
        userLinkedAccounts: state.user.userLinkedAccounts,
    };
}

export default connect(mapStateToProps, {

})(ActivityStatsContainer);