import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import IGroupResponse from '../../BungieAPI/GroupsV2/IGroupResponse';

export enum CLAN {
    MEMBERS_FETCH_START = 'CLAN_MEMBERS_FETCH_START',
    MEMBERS_FETCH_SUCCESS = 'CLAN_MEMBERS_FETCH_SUCCESS',
    MEMBERS_FETCH_ERROR = 'CLAN_MEMBERS_FETCH_ERROR',

    RESPONSE_FETCH_START = 'CLAN_RESPONSE_FETCH_START',
    RESPONSE_FETCH_SUCCESS = 'CLAN_RESPONSE_FETCH_SUCCESS',
}

export interface IClanState extends IClanMembersState, IClanResponseState{

}


export interface IClanMembersFetchStartAction {
    type: typeof CLAN.MEMBERS_FETCH_START
    id: number
}

export interface IClanMembersFetchSuccessAction extends IClanMembersState {
    type: typeof CLAN.MEMBERS_FETCH_SUCCESS
    id: number
}

export interface IClanMembersState {
    clanMembers: IGroupMember[]
}

export interface IClanResponseFetchStartAction {
    type: typeof CLAN.RESPONSE_FETCH_START
    id: number
}

export interface IClanResponseFetchSuccessAction extends IClanResponseState{
    type: typeof CLAN.RESPONSE_FETCH_SUCCESS
    id: number
}

export interface IClanResponseState {
    clanResponse?: IGroupResponse
}