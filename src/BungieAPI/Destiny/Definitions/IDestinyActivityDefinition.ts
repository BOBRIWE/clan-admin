import ActivityModeType from './ActivityModeType';
import IDestinyDisplayPropertiesDefinition from './Common/IDestinyDisplayPropertiesDefinition';
import IDestinyActivityRewardDefinition from './IDestinyActivityRewardDefinition';
import IDestinyActivityModifierReferenceDefinition from './IDestinyActivityModifierReferenceDefinition';
import IDestinyActivityChallengeDefinition from './IDestinyActivityChallengeDefinition';
import IDestinyActivityUnlockStringDefinition from './IDestinyActivityUnlockStringDefinition';
import IDestinyActivityPlaylistItemDefinition from './IDestinyActivityPlaylistItemDefinition';
import IDestinyActivityGraphListEntryDefinition from './IDestinyActivityGraphListEntryDefinition';
import IDestinyActivityMatchmakingBlockDefinition from './IDestinyActivityMatchmakingBlockDefinition';
import IDestinyActivityGuidedBlockDefinition from './IDestinyActivityGuidedBlockDefinition';
import IDestinyActivityLoadoutRequirementSet from './IDestinyActivityLoadoutRequirementSet';
import IDestinyActivityInsertionPointDefinition from './IDestinyActivityInsertionPointDefinition';
import IDestinyEnvironmentLocationMapping from '../Constants/IDestinyEnvironmentLocationMapping';
import IDestinyDefinition from "./IDestinyDefinition";

export default interface IDestinyActivityDefinition extends IDestinyDefinition  {
    displayProperties: IDestinyDisplayPropertiesDefinition
    originalDisplayProperties: IDestinyDisplayPropertiesDefinition
    selectionScreenDisplayProperties: IDestinyDisplayPropertiesDefinition
    releaseIcon: string
    releaseTime: number
    activityLevel: number
    activityLightLevel: number
    destinationHash: number
    placeHash: number
    activityTypeHash: number
    tier: number
    pgcrImage: string
    rewards: IDestinyActivityRewardDefinition[]
    modifiers: IDestinyActivityModifierReferenceDefinition[]
    isPlaylist: boolean
    challenges: IDestinyActivityChallengeDefinition[]
    optionalUnlockStrings: IDestinyActivityUnlockStringDefinition[]
    playlistItems: IDestinyActivityPlaylistItemDefinition[]
    activityGraphList: IDestinyActivityGraphListEntryDefinition[]
    matchmaking: IDestinyActivityMatchmakingBlockDefinition
    guidedGame: IDestinyActivityGuidedBlockDefinition
    directActivityModeHash: number
    directActivityModeType: ActivityModeType
    loadouts: IDestinyActivityLoadoutRequirementSet[]
    activityModeHashes: number[]
    activityModeTypes: ActivityModeType[]
    isPvP: boolean
    insertionPoints: IDestinyActivityInsertionPointDefinition[]
    activityLocationMappings: IDestinyEnvironmentLocationMapping[]
}