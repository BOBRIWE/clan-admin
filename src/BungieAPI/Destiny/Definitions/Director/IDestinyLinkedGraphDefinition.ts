import IDestinyUnlockExpressionDefinition from '../IDestinyUnlockExpressionDefinition';
import IDestinyLinkedGraphEntryDefinition from './IDestinyLinkedGraphEntryDefinition';

export default interface IDestinyLinkedGraphDefinition {
    description: string
    name: string
    unlockExpression: IDestinyUnlockExpressionDefinition
    linkedGraphId: number
    linkedGraphs: IDestinyLinkedGraphEntryDefinition[]
    overview: string
}