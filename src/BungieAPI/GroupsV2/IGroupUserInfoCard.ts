export default interface IGroupUserInfoCard {
    LastSeenDisplayName: string
    LastSeenDisplayNameType: number
    supplementalDisplayName: string
    iconPath: string
    crossSaveOverride: number
    applicableMembershipTypes: number[]
    isPublic: boolean
    membershipType: number
    membershipId: number
    displayName: string
}