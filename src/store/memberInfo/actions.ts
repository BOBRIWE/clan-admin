import {
    IMemberInfoActivityHistoryFetchStartAction,
    IMemberInfoActivityHistoryFetchSuccessAction,
    IMemberInfoDestinyProfileFetchStartAction,
    IMemberInfoDestinyProfileFetchSuccessAction,
    IMemberInfoLinkedAccountsFetchStartAction,
    IMemberInfoLinkedAccountsFetchSuccessAction,
    IMemberInfoPostGameCarnageReportFetchStartAction,
    IMemberInfoPostGameCarnageReportFetchSuccessAction,
    MEMBER_INFO,
    MemberInfoActivityHistoryActions,
    MemberInfoDestinyProfileActions,
    MemberInfoLinkedAccountsActions, MemberInfoPostGameCarnageReportActions
} from './types';
import IDestinyLinkedProfilesResponse from '../../BungieAPI/Destiny/Responses/IDestinyLinkedProfilesResponse';
import {ThunkAction} from 'redux-thunk';
import Destiny2 from '../../BungieAPI/Destiny2/Destiny2';
import BungieMembershipType from '../../BungieAPI/BungieMembershipType';
import IDestinyProfileResponse from '../../BungieAPI/Destiny/Responses/IDestinyProfileResponse';
import DestinyComponentType from '../../BungieAPI/Destiny/DestinyComponentType';
import IDestinyActivityHistoryResults from '../../BungieAPI/Destiny/HistoricalStats/IDestinyActivityHistoryResults';
import ActivityModeType from '../../BungieAPI/Destiny/Definitions/ActivityModeType';
import IDestinyPostGameCarnageReportData
    from '../../BungieAPI/Destiny/HistoricalStats/IDestinyPostGameCarnageReportData';

function memberInfoLinkedProfilesFetchStart(id: string): IMemberInfoLinkedAccountsFetchStartAction {
    return {
        type: MEMBER_INFO.LINKED_ACCOUNTS_FETCH_START,
        id
    };
}

function memberInfoLinkedProfilesFetchSuccess(id: string, memberInfoLinkedAccounts: IDestinyLinkedProfilesResponse): IMemberInfoLinkedAccountsFetchSuccessAction {
    return {
        type: MEMBER_INFO.LINKED_ACCOUNTS_FETCH_SUCCESS,
        id,
        memberInfoLinkedAccounts
    };
}

function memberInfoDestinyProfileFetchStart(id: string): IMemberInfoDestinyProfileFetchStartAction {
    return {
        type: MEMBER_INFO.PROFILE_FETCH_START,
        id
    };
}

function memberInfoDestinyProfileFetchSuccess(id: string, memberInfoDestinyProfile: IDestinyProfileResponse): IMemberInfoDestinyProfileFetchSuccessAction {
    return {
        type: MEMBER_INFO.PROFILE_FETCH_SUCCESS,
        id,
        memberInfoDestinyProfile
    };
}

function memberInfoActivityHistoryFetchStart(id: string): IMemberInfoActivityHistoryFetchStartAction {
    return {
        type: MEMBER_INFO.ACTIVITY_HISTORY_FETCH_START,
        id
    };
}

function memberInfoActivityHistoryFetchSuccess(id: string, activityHistories: IDestinyActivityHistoryResults[]): IMemberInfoActivityHistoryFetchSuccessAction {
    return {
        type: MEMBER_INFO.ACTIVITY_HISTORY_FETCH_SUCCESS,
        id,
        activityHistories
    };
}

export function memberInfoProfileFetch(
    id: string,
    destinyComponentType: DestinyComponentType,
    bungieMembershipType: BungieMembershipType,
    activityModeType: ActivityModeType
): ThunkAction<
    Promise<void>,
    undefined,
    undefined,
    MemberInfoDestinyProfileActions | MemberInfoLinkedAccountsActions | MemberInfoActivityHistoryActions
    > {
    return async (dispatch) => {
        dispatch(memberInfoLinkedProfilesFetchStart(id));
        dispatch(memberInfoDestinyProfileFetchStart(id));
        dispatch(memberInfoActivityHistoryFetchStart(id));

        const linkedProfiles = await Destiny2.getLinkedProfiles(id, BungieMembershipType.All);
        dispatch(memberInfoLinkedProfilesFetchSuccess(id, linkedProfiles));


        const profile = await Destiny2.getProfile(id, destinyComponentType, bungieMembershipType);
        dispatch(memberInfoDestinyProfileFetchSuccess(id, profile));


        const history: IDestinyActivityHistoryResults[] = [];
        for (let charId of profile.profile.data.characterIds) {
            history.push(await Destiny2.getActivityHistory(id, charId, activityModeType));
        }
        dispatch(memberInfoActivityHistoryFetchSuccess(id, history));
    };
}

function memberInfoPostGameCarnageReportFetchStart(id: string): IMemberInfoPostGameCarnageReportFetchStartAction {
    return {
        type: MEMBER_INFO.POST_GAME_CARNAGE_REPORT_FETCH_START,
        id
    };
}

function memberInfoPostGameCarnageReportFetchSuccess(id: string, postGameCarnageReport: IDestinyPostGameCarnageReportData): IMemberInfoPostGameCarnageReportFetchSuccessAction {
    return {
        type: MEMBER_INFO.POST_GAME_CARNAGE_REPORT_FETCH_SUCCESS,
        id,
        postGameCarnageReport
    };
}

export function memberInfoPostGameCarnageReportFetch(id: string): ThunkAction<Promise<void>, undefined, undefined, MemberInfoPostGameCarnageReportActions> {
    return async (dispatch) => {
        dispatch(memberInfoPostGameCarnageReportFetchStart(id));
        const report = await Destiny2.getPostGameCarnageReport(id);
        dispatch(memberInfoPostGameCarnageReportFetchSuccess(id, report));
    };
}