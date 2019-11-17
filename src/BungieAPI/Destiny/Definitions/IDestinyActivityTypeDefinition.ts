import IDestinyDisplayPropertiesDefinition from './Common/IDestinyDisplayPropertiesDefinition';

export default interface IDestinyActivityTypeDefinition {
    displayProperties: IDestinyDisplayPropertiesDefinition
    hash: number
    index: number
    redacted: boolean
}