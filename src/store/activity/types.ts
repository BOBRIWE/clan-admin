import IDestinyHistoricalStatsPeriodGroup
    from '../../BungieAPI/Destiny/HistoricalStats/IDestinyHistoricalStatsPeriodGroup';
import IDestinyProfileResponse from '../../BungieAPI/Destiny/Responses/IDestinyProfileResponse';


export enum ACTIVITY {
    HISTORY_FETCH_START = 'ACTIVITY_HISTORY_FETCH_START',
    HISTORY_FETCH_SUCCESS = 'ACTIVITY_HISTORY_FETCH_SUCCESS'
}

export interface IActivityHistoryFetchStartAction {
    type: typeof ACTIVITY.HISTORY_FETCH_START
    profileResponse: IDestinyProfileResponse
}

export interface IActivityHistoryFetchSuccessAction extends IActivityHistoryState {
    type: typeof ACTIVITY.HISTORY_FETCH_SUCCESS
    profileResponse: IDestinyProfileResponse
}

export interface IActivityHistoryState {
    activityHistory: IDestinyHistoricalStatsPeriodGroup[]
}

export interface IActivityState extends IActivityHistoryState{

}

export type ActivityHistoryActions = IActivityHistoryFetchStartAction | IActivityHistoryFetchSuccessAction;

export type ActivityActions = ActivityHistoryActions;