import {
    CLAN_MEMBERS_FETCH_START,
    CLAN_MEMBERS_FETCH_SUCCESS,
    IClanMembersFetchStartAction,
    IClanMembersFetchSuccessAction
} from '../constants/ClanMembersConstants';
import IGroupMember from '../BungieAPI/GroupsV2/IGroupMember';
import GroupsV2 from '../BungieAPI/GroupsV2/GroupsV2';
import {ThunkAction} from 'redux-thunk';

export function clanMembersFetch(id: number): ThunkAction<Promise<void>, undefined, undefined, IClanMembersFetchSuccessAction | IClanMembersFetchStartAction> {
    return async (dispatch) => {
        dispatch(clanMemberFetchStart(id));
        const membersRequest = await GroupsV2.getClanMembers(id);
        dispatch(clanMembersFetchSuccess(id, membersRequest.results));
    };
}

export function clanMemberFetchStart(id: number): IClanMembersFetchStartAction {
    return {
        type: CLAN_MEMBERS_FETCH_START,
        id
    };
}

export function clanMembersFetchSuccess(id: number, clanMembers: IGroupMember[]): IClanMembersFetchSuccessAction {
    return {
        type: CLAN_MEMBERS_FETCH_SUCCESS,
        id,
        clanMembers
    };
}

export type ClanMemberActions = IClanMembersFetchStartAction | IClanMembersFetchSuccessAction;