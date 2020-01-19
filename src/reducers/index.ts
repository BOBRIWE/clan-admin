import { combineReducers } from 'redux';
import { clan } from '../store/clan/reducers';
import { userReducer } from '../store/user/reducers';
import {IClanState} from '../store/clan/types';
import {IDefinitionsState} from '../store/definitions/types';
import {definitions} from '../store/definitions/reducers';
import {IUserState} from '../store/user/types';
import {IActivityState} from '../store/activity/types';
import {activityReducer} from '../store/activity/reducers';

export interface IRootReducer {
    user: IUserState
    clan: IClanState
    definitions: IDefinitionsState
    activity: IActivityState
}

const rootReducer = combineReducers<IRootReducer>({
    activity: activityReducer,
    user: userReducer,
    clan,
    definitions
});

export default rootReducer;