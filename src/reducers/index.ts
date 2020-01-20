import { combineReducers } from 'redux';
import { clan } from '../store/clan/reducers';
import { userReducer } from '../store/user/reducers';
import {IClanState} from '../store/clan/types';
import {IDefinitionsState} from '../store/definitions/types';
import {definitions} from '../store/definitions/reducers';
import {IUserState} from '../store/user/types';
import {IActivityState} from '../store/activity/types';
import {activityReducer} from '../store/activity/reducers';
import {IMemberInfoState} from '../store/memberInfo/types';
import {memberInfoReducer} from '../store/memberInfo/reducers';

export interface IRootReducer {
    user: IUserState
    clan: IClanState
    definitions: IDefinitionsState
    activity: IActivityState
    memberInfo: IMemberInfoState
}

const rootReducer = combineReducers<IRootReducer>({
    activity: activityReducer,
    user: userReducer,
    clan,
    definitions,
    memberInfo: memberInfoReducer
});

export default rootReducer;