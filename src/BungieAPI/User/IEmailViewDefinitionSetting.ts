import IEmailSubscriptionDefinition from './IEmailSubscriptionDefinition';
import IEMailSettingLocalization from './IEMailSettingLocalization';

export default interface IEmailViewDefinitionSetting {
    name: string
    localization: IEMailSettingLocalization[]
    setByDefault: boolean
    optInAggregateValue: number
    subscriptions: IEmailSubscriptionDefinition[]
}