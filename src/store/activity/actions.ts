import {
    ACTIVITY,
    ActivityHistoryActions,
    IActivityHistoryFetchStartAction,
    IActivityHistoryFetchSuccessAction
} from './types';
import {ThunkAction} from 'redux-thunk';
import Destiny2 from '../../BungieAPI/Destiny2/Destiny2';
import ActivityModeType from '../../BungieAPI/Destiny/Definitions/ActivityModeType';
import IDestinyProfileResponse from '../../BungieAPI/Destiny/Responses/IDestinyProfileResponse';
import IDestinyHistoricalStatsPeriodGroup
    from '../../BungieAPI/Destiny/HistoricalStats/IDestinyHistoricalStatsPeriodGroup';

function activityHistoryFetchStart(profileResponse: IDestinyProfileResponse): IActivityHistoryFetchStartAction {
    return {
        type: ACTIVITY.HISTORY_FETCH_START,
        profileResponse
    };
}

function activityHistoryFetchSuccess(profileResponse: IDestinyProfileResponse, activityHistory: IDestinyHistoricalStatsPeriodGroup[]): IActivityHistoryFetchSuccessAction {
    return {
        type: ACTIVITY.HISTORY_FETCH_SUCCESS,
        profileResponse,
        activityHistory
    };
}

export function activityHistoryFetch(profileResponse: IDestinyProfileResponse, activityMode: ActivityModeType): ThunkAction<Promise<void>, undefined, undefined, ActivityHistoryActions>  {
    return async (dispatch) => {
        dispatch(activityHistoryFetchStart(profileResponse));

        let activityHistory: IDestinyHistoricalStatsPeriodGroup[] = [];

        for (let charId in profileResponse.profile.data.characterIds) {
            const activityHistoryResponse = await Destiny2.getActivityHistory(profileResponse.profile.data.userInfo.membershipId, charId, activityMode);
            activityHistory = activityHistory.concat(activityHistoryResponse.activities);
        }

        dispatch(activityHistoryFetchSuccess(profileResponse, activityHistory));
    };
}