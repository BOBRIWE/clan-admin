import {IMemberInfoState, MEMBER_INFO, MemberInfoActions} from './types';

const initialState: IMemberInfoState = {
    postGameCarnageReport: null,
    memberInfoDestinyProfile: null,
    memberInfoLinkedAccounts: null,
    activityHistories: []
};

export function memberInfoReducer(state = initialState, action: MemberInfoActions) {
    switch (action.type) {
        case MEMBER_INFO.ACTIVITY_HISTORY_FETCH_START:
            return {
                ...state,
                activityHistories: []
            };
        case MEMBER_INFO.ACTIVITY_HISTORY_FETCH_SUCCESS:
            return {
                ...state,
                activityHistories: action.activityHistories
            };
        case MEMBER_INFO.LINKED_ACCOUNTS_FETCH_START:
            return {
                ...state,
                memberInfoLinkedAccounts: null
            };
        case MEMBER_INFO.LINKED_ACCOUNTS_FETCH_SUCCESS:
            return {
                ...state,
                memberInfoLinkedAccounts: action.memberInfoLinkedAccounts
            };
        case MEMBER_INFO.POST_GAME_CARNAGE_REPORT_FETCH_START:
            return {
                ...state,
                postGameCarnageReport: null
            };
        case MEMBER_INFO.POST_GAME_CARNAGE_REPORT_FETCH_SUCCESS:
            return {
                ...state,
                postGameCarnageReport: action.postGameCarnageReport
            };
        case MEMBER_INFO.PROFILE_FETCH_START:
            return {
                ...state,
                memberInfoDestinyProfile: null
            };
        case MEMBER_INFO.PROFILE_FETCH_SUCCESS:
            return {
                ...state,
                memberInfoDestinyProfile: action.memberInfoDestinyProfile
            };
        default:
            return state;
    }
}