import ActivityModeType from './ActivityModeType';

export default interface IDestinyActivityPlaylistItemDefinition {
    activityHash: number
    directActivityModeHash: number
    directActivityModeType: ActivityModeType
    activityModeHashes: number[]
    activityModeTypes: number[]
}