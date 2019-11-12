import IDestinyHistoricalStatsActivity from './IDestinyHistoricalStatsActivity';
import IDestinyHistoricalStatsValue from './IDestinyHistoricalStatsValue';

export default interface IDestinyHistoricalStatsPeriodGroup {
    period: Date
    activityDetails: IDestinyHistoricalStatsActivity
    values: IDestinyHistoricalStatsValue[]
}