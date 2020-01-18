import { combineReducers } from 'redux';
import { clan } from '../store/clan/reducers';
import { userReducer } from '../store/user/reducers';
import {IClanState} from '../store/clan/types';
import {IDefinitionsState} from '../store/definitions/types';
import {definitions} from '../store/definitions/reducers';
import {IUserState} from '../store/user/types';

export interface IRootReducer {
    user: IUserState
    clan: IClanState
    definitions: IDefinitionsState
}

const rootReducer = combineReducers<IRootReducer>({
    user: userReducer,
    clan,
    definitions
});

export default rootReducer;