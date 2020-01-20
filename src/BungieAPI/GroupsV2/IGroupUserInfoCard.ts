import BungieMembershipType from '../BungieMembershipType';

export default interface IGroupUserInfoCard {
    LastSeenDisplayName: string
    LastSeenDisplayNameType: number
    supplementalDisplayName: string
    iconPath: string
    crossSaveOverride: number
    applicableMembershipTypes: BungieMembershipType[]
    isPublic: boolean
    membershipType: BungieMembershipType
    membershipId: string
    displayName: string
}