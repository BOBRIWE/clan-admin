import IDestinyDisplayPropertiesDefinition from './Common/IDestinyDisplayPropertiesDefinition';
import IDestinyDefinition from "./IDestinyDefinition";

export default interface IDestinyPlaceDefinition extends IDestinyDefinition {
    displayProperties: IDestinyDisplayPropertiesDefinition
    hash: number
    index: number
    redacted: boolean
}