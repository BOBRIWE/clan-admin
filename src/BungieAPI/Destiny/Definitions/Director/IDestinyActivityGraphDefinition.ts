import IDestinyActivityGraphNodeDefinition from './IDestinyActivityGraphNodeDefinition';
import IDestinyActivityGraphArtElementDefinition from './IDestinyActivityGraphArtElementDefinition';
import IDestinyActivityGraphConnectionDefinition from './IDestinyActivityGraphConnectionDefinition';
import IDestinyActivityGraphDisplayObjectiveDefinition from './IDestinyActivityGraphDisplayObjectiveDefinition';
import IDestinyActivityGraphDisplayProgressionDefinition from './IDestinyActivityGraphDisplayProgressionDefinition';
import IDestinyLinkedGraphDefinition from './IDestinyLinkedGraphDefinition';

export default interface IDestinyActivityGraphDefinition {
    nodes: IDestinyActivityGraphNodeDefinition[]
    artElements: IDestinyActivityGraphArtElementDefinition[]
    connections: IDestinyActivityGraphConnectionDefinition[]
    displayObjectives: IDestinyActivityGraphDisplayObjectiveDefinition[]
    displayProgressions: IDestinyActivityGraphDisplayProgressionDefinition[]
    linkedGraphs: IDestinyLinkedGraphDefinition[]
    hash: number
    index: number
    redacted: boolean
}