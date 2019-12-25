import { combineReducers } from 'redux';
import { clan } from '../store/clan/reducers';
import {IClanState} from '../store/clan/types';
import {IDefinitionsState} from '../store/definitions/types';
import {definitions} from '../store/definitions/reducers';

export interface IRootReducer {
    clan: IClanState
    definitions: IDefinitionsState
}

const rootReducer = combineReducers<IRootReducer>({
    clan,
    definitions
});

export default rootReducer;