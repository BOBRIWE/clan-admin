import { ClanMemberActions } from '../actions/ClanActions';
import { IClanMembersState } from '../constants/ClanMembersConstants';

const initialState: IClanMembersState = {
    clanMembers: []
};

export default function clan(state: IClanMembersState = initialState, action: ClanMemberActions): IClanMembersState {
    switch (action.type) {
        case 'CLAN_MEMBERS_FETCH_START':
            return {
                clanMembers: []
            };
        case 'CLAN_MEMBERS_FETCH_SUCCESS':
            return {
                clanMembers: action.clanMembers
            };
        default:
            return initialState;
    }
}