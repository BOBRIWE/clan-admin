import BungieMembershipType from '../BungieMembershipType';

export default interface IUserInfoCard {
    supplementalDisplayName: string
    iconPath: string
    crossSaveOverride: number
    applicableMembershipTypes: BungieMembershipType[]
    isPublic: boolean
    membershipType: BungieMembershipType
    membershipId: number
    displayName: string
}