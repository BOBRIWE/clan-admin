import IDestinyDefinition from "./IDestinyDefinition";

export default interface IDestinyActivityGuidedBlockDefinition extends IDestinyDefinition  {
    guidedMaxLobbySize: number
    guidedMinLobbySize: number
    guidedDisbandCount: number
}