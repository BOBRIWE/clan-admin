import IDestinyDisplayPropertiesDefinition from '../Common/IDestinyDisplayPropertiesDefinition';
import IDestinyPositionDefinition from '../Common/IDestinyPositionDefinition';
import IDestinyActivityGraphNodeFeaturingStateDefinition from './IDestinyActivityGraphNodeFeaturingStateDefinition';
import IDestinyActivityGraphNodeActivityDefinition from './IDestinyActivityGraphNodeActivityDefinition';
import IDestinyActivityGraphNodeStateEntry from './IDestinyActivityGraphNodeStateEntry';

export default interface IDestinyActivityGraphNodeDefinition {
    nodeId: number
    overrideDisplay: IDestinyDisplayPropertiesDefinition
    position: IDestinyPositionDefinition
    featuringStates: IDestinyActivityGraphNodeFeaturingStateDefinition[]
    activities: IDestinyActivityGraphNodeActivityDefinition[]
    states: IDestinyActivityGraphNodeStateEntry[]
}