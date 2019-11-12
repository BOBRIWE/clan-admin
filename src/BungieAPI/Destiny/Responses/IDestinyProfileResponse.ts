import ISingleComponentResponseOfDestinyProfileComponent from '../../ISingleComponentResponseOfDestinyProfileComponent';
import IDictionaryComponentResponseOfint64AndDestinyCharacterComponent
    from '../../IDictionaryComponentResponseOfint64AndDestinyCharacterComponent';

export default interface IDestinyProfileResponse {
    vendorReceipts: object
    profileInventory: object
    profileCurrencies: object
    profile: ISingleComponentResponseOfDestinyProfileComponent
    platformSilver: object
    profileKiosks: object
    profilePlugSets: object
    profileProgression: object
    profilePresentationNodes: object
    profileRecords: object
    profileCollectibles: object
    profileTransitoryData: object
    characters: IDictionaryComponentResponseOfint64AndDestinyCharacterComponent
    characterInventories: object
    characterProgressions: object
    characterRenderData: object
    characterActivities: object
    characterEquipment: object
    characterKiosks: object
    characterPlugSets: object
    characterUninstancedItemComponents: object
    characterPresentationNodes: object
    characterRecords: object
    characterCollectibles: object
    itemComponents: object
    characterCurrencyLookups: object
}