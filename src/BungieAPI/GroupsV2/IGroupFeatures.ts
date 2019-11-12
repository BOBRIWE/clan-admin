import BungieMembershipType from '../BungieMembershipType';

export default interface IGroupFeatures {
    maximumMembers: number
    maximumMembershipsOfGroupType: number
    capabilities: number
    membershipTypes: BungieMembershipType[]
    invitePermissionOverride: boolean
    updateCulturePermissionOverride: boolean
    hostGuidedGamePermissionOverride: number
    updateBannerPermissionOverride: boolean
    joinLevel: number
}