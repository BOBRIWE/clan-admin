import IUserInfoCard from '../../User/IUserInfoCard';

export default interface IDestinyPlayer {
    destinyUserInfo: IUserInfoCard
    characterClass: string
    classHash: number
    raceHash: number
    genderHash: number
    characterLevel: number
    lightLevel: number
    bungieNetUserInfo: IUserInfoCard
    clanName: string
    clanTag: string
    emblemHash: number
}