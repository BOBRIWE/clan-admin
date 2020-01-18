import {
    IUserGeneralUserFetchStartAction, IUserGeneralUserFetchSuccessAction,
    IUserLinkedAccountsFetchStartAction,
    IUserLinkedAccountsFetchSuccessAction,
    USER
} from './types';
import IDestinyLinkedProfilesResponse from '../../BungieAPI/Destiny/Responses/IDestinyLinkedProfilesResponse';
import Destiny2 from '../../BungieAPI/Destiny2/Destiny2';
import BungieMembershipType from '../../BungieAPI/BungieMembershipType';
import {ThunkAction} from 'redux-thunk';
import IGeneralUser from '../../BungieAPI/User/IGeneralUser';
import User from '../../BungieAPI/User/User';

export function userLinkedAccountsFetch(id: number): ThunkAction<Promise<void>, undefined, undefined, UserLinkedAccountsActions>  {
    return async (dispatch) => {
        dispatch(userLinkedAccountsFetchStart(id));
        const userLinkedAccounts = await Destiny2.getLinkedProfiles(id, BungieMembershipType.All);
        dispatch(userLinkedAccountsFetchSuccess(id, userLinkedAccounts));
    };
}

export function userGeneralUserFetch(id: number): ThunkAction<Promise<void>, undefined, undefined, UserGeneralUserActions> {
    return async (dispatch) => {
        dispatch(userGeneralUserFetchStart(id));
        const generalUser = await User.getBungieNetUserById(id);
        dispatch(userGeneralUserFetchSuccess(id, generalUser));
    };
}

function userLinkedAccountsFetchStart(id: number): IUserLinkedAccountsFetchStartAction {
    return {
        type: USER.LINKED_ACCOUNTS_FETCH_START,
        id
    };
}

function userLinkedAccountsFetchSuccess(id: number, userLinkedAccounts: IDestinyLinkedProfilesResponse): IUserLinkedAccountsFetchSuccessAction {
    return {
        type: USER.LINKED_ACCOUNTS_FETCH_SUCCESS,
        id,
        userLinkedAccounts
    };
}

function userGeneralUserFetchStart(id: number): IUserGeneralUserFetchStartAction {
    return {
        type: USER.GENERAL_USER_FETCH_START,
        id
    };
}

function userGeneralUserFetchSuccess(id: number, generalUser: IGeneralUser): IUserGeneralUserFetchSuccessAction {
    return {
        type: USER.GENERAL_USER_FETCH_SUCCESS,
        id,
        generalUser
    };
}

export type UserLinkedAccountsActions = IUserLinkedAccountsFetchStartAction | IUserLinkedAccountsFetchSuccessAction;
export type UserGeneralUserActions = IUserGeneralUserFetchStartAction | IUserGeneralUserFetchSuccessAction;

export type UserActions = UserLinkedAccountsActions | UserGeneralUserActions;