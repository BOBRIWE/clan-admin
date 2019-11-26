import GameVersions from './GameVersions';
import BungieMembershipType from '../../BungieMembershipType';

export default interface IDestinyProfileUserInfoCard {
    dateLastPlayed: string
    isOverridden: boolean
    isCrossSavePrimary: boolean
    platformSilver: object // TODO add silver if needed
    unpairedGameVersions: GameVersions
    supplementalDisplayName: string
    iconPath: string
    crossSaveOverride: number
    applicableMembershipTypes: BungieMembershipType[]
    isPublic: boolean
    membershipType: BungieMembershipType
    membershipId: number
    displayName: string
}