import IDestinyItemQuantity from '../IDestinyItemQuantity';
import IDestinyDefinition from "./IDestinyDefinition";

export default interface IDestinyActivityRewardDefinition extends IDestinyDefinition {
    rewardText: string
    rewardItems: IDestinyItemQuantity[]
}