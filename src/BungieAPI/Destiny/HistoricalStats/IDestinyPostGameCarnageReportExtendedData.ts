import IDestinyHistoricalStatsValue from './IDestinyHistoricalStatsValue';
import IDestinyHistoricalWeaponStats from './IDestinyHistoricalWeaponStats';

export default interface IDestinyPostGameCarnageReportExtendedData {
    weapons: IDestinyHistoricalWeaponStats[]
    values: IDestinyHistoricalStatsValue[]
}