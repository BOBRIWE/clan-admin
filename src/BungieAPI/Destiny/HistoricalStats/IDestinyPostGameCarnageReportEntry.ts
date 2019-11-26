import IDestinyHistoricalStatsValue from './IDestinyHistoricalStatsValue';
import IDestinyPlayer from './IDestinyPlayer';
import IDestinyPostGameCarnageReportExtendedData from './IDestinyPostGameCarnageReportExtendedData';

export default interface IDestinyPostGameCarnageReportEntry {
    standing: number
    score: IDestinyHistoricalStatsValue
    player: IDestinyPlayer
    characterId: number
    values: {[key: string]: IDestinyHistoricalStatsValue}
    extended: IDestinyPostGameCarnageReportExtendedData
}