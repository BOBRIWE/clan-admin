import IDestinyItemQuantity from '../IDestinyItemQuantity';
import IDestinyDefinition from "./IDestinyDefinition";

export default interface IDestinyActivityChallengeDefinition extends IDestinyDefinition {
    objectiveHash: number
    dummyRewards: IDestinyItemQuantity[]
}