import IDestinyLinkedProfilesResponse from '../../BungieAPI/Destiny/Responses/IDestinyLinkedProfilesResponse';
import IGeneralUser from '../../BungieAPI/User/IGeneralUser';

export enum USER {
    LINKED_ACCOUNTS_FETCH_START = 'USER_LINKED_ACCOUNTS_FETCH_START',
    LINKED_ACCOUNTS_FETCH_SUCCESS = 'USER_LINKED_ACCOUNTS_FETCH_SUCCESS',

    GENERAL_USER_FETCH_START = 'USER_GENERAL_USER_FETCH_START',
    GENERAL_USER_FETCH_SUCCESS = 'USER_GENERAL_USER_FETCH_SUCCESS'
}

export interface IUserLinkedAccountsFetchStartAction {
    type: typeof USER.LINKED_ACCOUNTS_FETCH_START
    id: number
}

export interface IUserLinkedAccountsFetchSuccessAction extends IUserLinkedAccountsState {
    type: typeof USER.LINKED_ACCOUNTS_FETCH_SUCCESS
    id: number
}

export interface IUserLinkedAccountsState {
    userLinkedAccounts?: IDestinyLinkedProfilesResponse
}


export interface IUserGeneralUserFetchStartAction {
    type: typeof USER.GENERAL_USER_FETCH_START
    id: number
}

export interface IUserGeneralUserFetchSuccessAction extends IUserGeneralUserState {
    type: typeof USER.GENERAL_USER_FETCH_SUCCESS
    id: number
}

export interface IUserGeneralUserState {
    generalUser?: IGeneralUser
}

export interface IUserState extends IUserLinkedAccountsState, IUserGeneralUserState{

}