import IDestinyItemQuantity from '../IDestinyItemQuantity';

export default interface IDestinyActivityRewardDefinition {
    rewardText: string
    rewardItems: IDestinyItemQuantity[]
}