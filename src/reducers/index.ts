import { combineReducers } from 'redux';
import clan from './clan';
import {IClanMembersState} from '../constants/ClanMembersConstants';

export interface IRootReducer {
    clan: IClanMembersState
}

const rootReducer = combineReducers<IRootReducer>({
    clan: clan
});

export default rootReducer;