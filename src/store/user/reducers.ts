import {IUserState, USER} from './types';
import {UserActions} from './actions';

const initialState: IUserState = {
    userLinkedAccounts: undefined,
    generalUser: undefined
};

export function userReducer(state = initialState, action: UserActions): IUserState {
    switch (action.type) {
        case USER.LINKED_ACCOUNTS_FETCH_START:
            return {
                ...state,
                userLinkedAccounts: undefined
            };
        case USER.LINKED_ACCOUNTS_FETCH_SUCCESS:
            return {
                ...state,
                userLinkedAccounts: action.userLinkedAccounts
            };
        case USER.GENERAL_USER_FETCH_START:
            return {
                ...state,
                generalUser: undefined
            };
        case USER.GENERAL_USER_FETCH_SUCCESS:
            return {
                ...state,
                generalUser: action.generalUser
            };
        default:
            return state;
    }
}