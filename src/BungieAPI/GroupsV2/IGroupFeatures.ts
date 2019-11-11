export default interface IGroupFeatures {
    maximumMembers: number
    maximumMembershipsOfGroupType: number
    capabilities: number
    membershipTypes: number[]
    invitePermissionOverride: boolean
    updateCulturePermissionOverride: boolean
    hostGuidedGamePermissionOverride: number
    updateBannerPermissionOverride: boolean
    joinLevel: number
}