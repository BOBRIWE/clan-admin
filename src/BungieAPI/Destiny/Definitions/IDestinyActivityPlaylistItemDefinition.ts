import ActivityModeType from './ActivityModeType';
import IDestinyDefinition from "./IDestinyDefinition";

export default interface IDestinyActivityPlaylistItemDefinition extends IDestinyDefinition {
    activityHash: number
    directActivityModeHash: number
    directActivityModeType: ActivityModeType
    activityModeHashes: number[]
    activityModeTypes: number[]
}