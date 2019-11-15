import IEmailOptInDefinition from './IEmailOptInDefinition';
import IEmailSubscriptionDefinition from './IEmailSubscriptionDefinition';
import IEmailViewDefinition from './IEmailViewDefinition';

export default interface IEmailSettings {
    optInDefinitions: IEmailOptInDefinition[]
    subscriptionDefinitions: IEmailSubscriptionDefinition[]
    views: IEmailViewDefinition[]
}