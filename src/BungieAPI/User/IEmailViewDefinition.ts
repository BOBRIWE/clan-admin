import IEmailViewDefinitionSetting from './IEmailViewDefinitionSetting';

export default interface IEmailViewDefinition {
    name: string
    viewSettings: IEmailViewDefinitionSetting[]
}