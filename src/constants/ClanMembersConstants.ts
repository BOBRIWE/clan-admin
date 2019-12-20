import IGroupMember from '../BungieAPI/GroupsV2/IGroupMember';

export const CLAN_MEMBERS_FETCH_START = 'CLAN_MEMBERS_FETCH_START';
export const CLAN_MEMBERS_FETCH_SUCCESS = 'CLAN_MEMBERS_FETCH_SUCCESS';
export const CLAN_MEMBERS_FETCH_ERROR = 'CLAN_MEMBERS_FETCH_ERROR';

export interface IClanMembersFetchStartAction {
    type: typeof CLAN_MEMBERS_FETCH_START
    id: number
}

export interface IClanMembersFetchSuccessAction extends IClanMembersState{
    type: typeof CLAN_MEMBERS_FETCH_SUCCESS
    id: number
}

export interface IClanMembersState {
    clanMembers: IGroupMember[]
}