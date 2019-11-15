export default interface ICoreSetting {
    identifier: string
    isDefault: boolean
    displayName: string
    summary: string
    imagePath: string
    childSettings: ICoreSetting[]
}