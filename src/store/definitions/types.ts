import {ISupportedDefinitions} from '../../BungieAPI/Destiny/Definitions/SupportedDefinitions';

export enum DEFINITIONS {
    FETCH = 'FETCH',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_START = 'FETCH_START'
}

export interface IDefinitionsFetchAction {
    type: typeof DEFINITIONS.FETCH
}

export interface IDefinitionsFetchStartAction {
    type: typeof DEFINITIONS.FETCH_START
}

export interface IDefinitionsFetchSuccessAction extends IDefinitionsState{
    type: typeof DEFINITIONS.FETCH_SUCCESS
}

export interface IDefinitionsState {
    definitions: ISupportedDefinitions | null
}

export type DefinitionsActions = IDefinitionsFetchStartAction | IDefinitionsFetchSuccessAction;