import {ActivityActions, IActivityState, ACTIVITY} from './types';

const initialState: IActivityState = {
    activityHistory: []
};

export function activityReducer(state = initialState, action: ActivityActions): IActivityState {
    switch (action.type) {
        case ACTIVITY.HISTORY_FETCH_START:
            return {
                ...state,
                activityHistory: []
            };
        case ACTIVITY.HISTORY_FETCH_SUCCESS:
            return {
                ...state,
                activityHistory: action.activityHistory
            };
        default:
            return state;
    }
}