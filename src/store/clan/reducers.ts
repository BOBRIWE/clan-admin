import {ClanActions} from './actions';
import {CLAN, IClanState} from './types';

const initialState: IClanState = {
    clanMembers: [],
    clanResponse: undefined
};

export function clan(state = initialState, action: ClanActions): IClanState {
    switch (action.type) {
        case CLAN.MEMBERS_FETCH_START:
            return {
                ...state,
                clanMembers: []
            };
        case CLAN.MEMBERS_FETCH_SUCCESS:
            return {
                ...state,
                clanMembers: action.clanMembers
            };
        case CLAN.RESPONSE_FETCH_START:
            return {
                ...state,
                clanResponse: undefined
            };
        case CLAN.RESPONSE_FETCH_SUCCESS:
            return {
                ...state,
                clanResponse: action.clanResponse
            };
        default:
            return state;
    }
}