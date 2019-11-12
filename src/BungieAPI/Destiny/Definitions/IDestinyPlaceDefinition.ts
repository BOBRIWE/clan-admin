import IDestinyDisplayPropertiesDefinition from './Common/IDestinyDisplayPropertiesDefinition';

export default interface IDestinyPlaceDefinition {
    displayProperties: IDestinyDisplayPropertiesDefinition
    hash: number
    index: number
    redacted: boolean
}