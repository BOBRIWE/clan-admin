import IEMailSettingSubscriptionLocalization from './IEMailSettingSubscriptionLocalization';

export default interface IEmailSubscriptionDefinition {
    name: string
    localization: IEMailSettingSubscriptionLocalization[]
    value: number
}