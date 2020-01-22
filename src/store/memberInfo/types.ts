import IDestinyLinkedProfilesResponse from '../../BungieAPI/Destiny/Responses/IDestinyLinkedProfilesResponse';
import IDestinyProfileResponse from '../../BungieAPI/Destiny/Responses/IDestinyProfileResponse';
import IDestinyActivityHistoryResults from '../../BungieAPI/Destiny/HistoricalStats/IDestinyActivityHistoryResults';
import IDestinyPostGameCarnageReportData
    from '../../BungieAPI/Destiny/HistoricalStats/IDestinyPostGameCarnageReportData';
import IDestinyHistoricalStatsPeriodGroup
    from '../../BungieAPI/Destiny/HistoricalStats/IDestinyHistoricalStatsPeriodGroup';

export enum MEMBER_INFO {
    LINKED_ACCOUNTS_FETCH_START = 'MEMBER_INFO_LINKED_ACCOUNTS_FETCH_START',
    LINKED_ACCOUNTS_FETCH_SUCCESS = 'MEMBER_INFO_LINKED_ACCOUNTS_FETCH_SUCCESS',

    PROFILE_FETCH_START = 'MEMBER_INFO_PROFILE_FETCH_START',
    PROFILE_FETCH_SUCCESS = 'MEMBER_INFO_PROFILE_FETCH_SUCCESS',

    ACTIVITY_HISTORY_FETCH_START = 'MEMBER_INFO_ACTIVITY_HISTORY_FETCH_START',
    ACTIVITY_HISTORY_FETCH_SUCCESS = 'MEMBER_INFO_ACTIVITY_HISTORY_FETCH_SUCCESS',

    POST_GAME_CARNAGE_REPORT_FETCH_START = 'MEMBER_INFO_POST_GAME_CARNAGE_REPORT_FETCH_START',
    POST_GAME_CARNAGE_REPORT_FETCH_SUCCESS = 'MEMBER_INFO_POST_GAME_CARNAGE_REPORT_FETCH_SUCCESS',
}

export interface IMemberInfoLinkedAccountsFetchStartAction {
    type: typeof MEMBER_INFO.LINKED_ACCOUNTS_FETCH_START
    id: string
}

export interface IMemberInfoLinkedAccountsFetchSuccessAction extends IMemberInfoLinkedAccountsState {
    type: typeof MEMBER_INFO.LINKED_ACCOUNTS_FETCH_SUCCESS
    id: string
}

export interface IMemberInfoLinkedAccountsState {
    memberInfoLinkedAccounts: IDestinyLinkedProfilesResponse | null
}


export interface IMemberInfoDestinyProfileFetchStartAction {
    type: typeof MEMBER_INFO.PROFILE_FETCH_START
    id: string
}

export interface IMemberInfoDestinyProfileFetchSuccessAction extends IMemberInfoDestinyProfileState {
    type: typeof MEMBER_INFO.PROFILE_FETCH_SUCCESS
    id: string
}

export interface IMemberInfoDestinyProfileState {
    memberInfoDestinyProfile: IDestinyProfileResponse | null
}


export interface IMemberInfoActivityHistoryFetchStartAction {
    type: typeof MEMBER_INFO.ACTIVITY_HISTORY_FETCH_START
    id: string
}

export interface IMemberInfoActivityHistoryFetchSuccessAction extends IMemberInfoActivityHistoryState {
    type: typeof MEMBER_INFO.ACTIVITY_HISTORY_FETCH_SUCCESS
    id: string
}

export interface IMemberInfoActivityHistoryState {
    activityHistories: IDestinyHistoricalStatsPeriodGroup[]
}


export interface IMemberInfoPostGameCarnageReportFetchStartAction {
    type: typeof MEMBER_INFO.POST_GAME_CARNAGE_REPORT_FETCH_START
    id: string
}

export interface IMemberInfoPostGameCarnageReportFetchSuccessAction extends IMemberInfoPostGameCarnageReportState {
    type: typeof MEMBER_INFO.POST_GAME_CARNAGE_REPORT_FETCH_SUCCESS
    id: string
}

export interface IMemberInfoPostGameCarnageReportState {
    postGameCarnageReport: IDestinyPostGameCarnageReportData | null
}

export interface IMemberInfoState extends IMemberInfoActivityHistoryState, IMemberInfoDestinyProfileState, IMemberInfoLinkedAccountsState, IMemberInfoPostGameCarnageReportState{

}

export type MemberInfoLinkedAccountsActions = IMemberInfoLinkedAccountsFetchStartAction | IMemberInfoLinkedAccountsFetchSuccessAction;
export type MemberInfoDestinyProfileActions = IMemberInfoDestinyProfileFetchStartAction | IMemberInfoDestinyProfileFetchSuccessAction;
export type MemberInfoActivityHistoryActions = IMemberInfoActivityHistoryFetchStartAction | IMemberInfoActivityHistoryFetchSuccessAction;
export type MemberInfoPostGameCarnageReportActions = IMemberInfoPostGameCarnageReportFetchStartAction | IMemberInfoPostGameCarnageReportFetchSuccessAction;

export type MemberInfoActions = MemberInfoLinkedAccountsActions | MemberInfoDestinyProfileActions | MemberInfoActivityHistoryActions | MemberInfoPostGameCarnageReportActions;