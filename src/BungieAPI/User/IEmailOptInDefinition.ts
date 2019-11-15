import IEmailSubscriptionDefinition from './IEmailSubscriptionDefinition';

export default interface IEmailOptInDefinition {
    name: string
    value: number
    setByDefault: boolean
    dependentSubscriptions: IEmailSubscriptionDefinition[]
}