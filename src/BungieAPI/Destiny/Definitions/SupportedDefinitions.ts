import IDestinyActivityDefinition from "./IDestinyActivityDefinition";
import IDestinyActivityTypeDefinition from "./IDestinyActivityTypeDefinition";

export interface ISupportedDefinitions {
    DestinyActivityDefinition: {[key: number]: IDestinyActivityDefinition}
    DestinyActivityTypeDefinition: {[key: number]: IDestinyActivityTypeDefinition}
}

export enum SupportedDefinitions {
    DestinyActivityDefinition = 'DestinyActivityDefinition',
    DestinyActivityTypeDefinition = 'DestinyActivityTypeDefinition'
}