import IDestinyHistoricalStatsValue from './IDestinyHistoricalStatsValue';

export default interface IDestinyPostGameCarnageReportTeamEntry {
    teamId: number
    standing: IDestinyHistoricalStatsValue
    score: IDestinyHistoricalStatsValue
    teamName: string
}