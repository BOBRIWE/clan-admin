import IDestinyHistoricalStatsActivity from './IDestinyHistoricalStatsActivity';
import IDestinyPostGameCarnageReportEntry from './IDestinyPostGameCarnageReportEntry';
import IDestinyPostGameCarnageReportTeamEntry from './IDestinyPostGameCarnageReportTeamEntry';

export default interface IDestinyPostGameCarnageReportData {
    period: Date
    startingPhaseIndex: number
    activityDetails: IDestinyHistoricalStatsActivity
    entries: IDestinyPostGameCarnageReportEntry[]
    teams: IDestinyPostGameCarnageReportTeamEntry[]
}