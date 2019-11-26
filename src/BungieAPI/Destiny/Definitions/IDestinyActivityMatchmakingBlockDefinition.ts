import IDestinyDefinition from "./IDestinyDefinition";

export default interface IDestinyActivityMatchmakingBlockDefinition  extends IDestinyDefinition {
    isMatchmade: boolean
    minParty: number
    maxParty: number
    maxPlayers: number
    requiresGuardianOath: boolean
}