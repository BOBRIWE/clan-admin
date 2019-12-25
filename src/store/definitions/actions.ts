import {ThunkAction} from 'redux-thunk';
import {DEFINITIONS, IDefinitionsFetchStartAction, IDefinitionsFetchSuccessAction} from './types';
import Destiny from '../../BungieAPI/Destiny/Destiny';
import {ISupportedDefinitions} from '../../BungieAPI/Destiny/Definitions/SupportedDefinitions';

export function definitionsFetch(language: string): ThunkAction<Promise<void>, undefined, undefined, IDefinitionsFetchStartAction | IDefinitionsFetchSuccessAction> {
    return async (dispatch) => {
        dispatch(definitionsFetchStart());
        const allDefinitions = await Destiny.getAllDefinitions(language);
        dispatch(definitionsFetchSuccess(allDefinitions));
    };
}

function definitionsFetchStart(): IDefinitionsFetchStartAction {
    return {
        type: DEFINITIONS.FETCH_START
    };
}

function definitionsFetchSuccess(definitions: ISupportedDefinitions): IDefinitionsFetchSuccessAction {
    return {
        type: DEFINITIONS.FETCH_SUCCESS,
        definitions
    };
}
