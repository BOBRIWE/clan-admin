import {
    CLAN,
    IClanMembersFetchStartAction,
    IClanMembersFetchSuccessAction,
    IClanResponseFetchStartAction,
    IClanResponseFetchSuccessAction,
    ISelectedMemberChangedAction
} from './types';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import GroupsV2 from '../../BungieAPI/GroupsV2/GroupsV2';
import {ThunkAction} from 'redux-thunk';
import IGroupResponse from '../../BungieAPI/GroupsV2/IGroupResponse';

export function clanMembersFetch(id: number): ThunkAction<Promise<void>, undefined, undefined, ClanMemberActions> {
    return async (dispatch) => {
        dispatch(clanMemberFetchStart(id));
        const membersRequest = await GroupsV2.getClanMembers(id);
        dispatch(clanMembersFetchSuccess(id, membersRequest.results));
    };
}

export function clanResponseFetch(id: number): ThunkAction<Promise<void>, undefined, undefined, ClanResponseActions> {
    return async (dispatch) => {
        dispatch(clanResponseFetchStart(id));
        const clanResponse = await GroupsV2.getClan(id);
        dispatch(clanResponseFetchSuccess(id, clanResponse));
    }
}

function clanMemberFetchStart(id: number): IClanMembersFetchStartAction {
    return {
        type: CLAN.MEMBERS_FETCH_START,
        id
    };
}

function clanMembersFetchSuccess(id: number, clanMembers: IGroupMember[]): IClanMembersFetchSuccessAction {
    return {
        type: CLAN.MEMBERS_FETCH_SUCCESS,
        id,
        clanMembers
    };
}

function clanResponseFetchStart(id: number): IClanResponseFetchStartAction {
    return {
        type: CLAN.RESPONSE_FETCH_START,
        id
    };
}

function clanResponseFetchSuccess(id: number, clanResponse: IGroupResponse): IClanResponseFetchSuccessAction {
    return {
        type: CLAN.RESPONSE_FETCH_SUCCESS,
        id,
        clanResponse
    };
}

export function changeSelectedMember(newId: string): ISelectedMemberChangedAction {
    return {
        type: CLAN.SELECTED_MEMBER_CHANGED,
        selectedMember: newId
    };
}


export type ClanMemberActions = IClanMembersFetchStartAction | IClanMembersFetchSuccessAction;
export type ClanResponseActions = IClanResponseFetchStartAction | IClanResponseFetchSuccessAction;

export type ClanActions = ClanMemberActions | ClanResponseActions | ISelectedMemberChangedAction;