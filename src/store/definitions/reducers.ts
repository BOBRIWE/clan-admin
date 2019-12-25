import {DEFINITIONS, DefinitionsActions, IDefinitionsState} from './types';

const initialState: IDefinitionsState = {
    definitions: null
};

export function definitions(state = initialState, action: DefinitionsActions): IDefinitionsState {
    switch (action.type) {
        case DEFINITIONS.FETCH_START:
            return state;
        case DEFINITIONS.FETCH_SUCCESS:
            return {
                ...state,
                definitions: action.definitions
            };
        default:
            return state;
    }
}