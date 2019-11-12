import IDestinyHistoricalStatsValuePair from './IDestinyHistoricalStatsValuePair';

export default interface IDestinyHistoricalStatsValue {
    statId: string
    basic: IDestinyHistoricalStatsValuePair
    pga: IDestinyHistoricalStatsValuePair
    weighted: IDestinyHistoricalStatsValuePair
    activityId: number
}