import IDestinyHistoricalStatsActivity from './IDestinyHistoricalStatsActivity';
import IDestinyHistoricalStatsValue from './IDestinyHistoricalStatsValue';

export default interface IDestinyHistoricalStatsPeriodGroup {
    period: string
    activityDetails: IDestinyHistoricalStatsActivity
    values: IDestinyHistoricalStatsValue[]
}