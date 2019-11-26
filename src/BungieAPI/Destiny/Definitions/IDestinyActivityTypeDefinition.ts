import IDestinyDisplayPropertiesDefinition from './Common/IDestinyDisplayPropertiesDefinition';
import IDestinyDefinition from "./IDestinyDefinition";

export default interface IDestinyActivityTypeDefinition extends IDestinyDefinition {
    displayProperties: IDestinyDisplayPropertiesDefinition
    hash: number
    index: number
    redacted: boolean
}