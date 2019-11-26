import IUserInfoCard from '../../../User/IUserInfoCard';

export default interface IDestinyProfileComponent {
    userInfo: IUserInfoCard
    dateLastPlayed: string
    versionsOwned: number
    characterIds: number[]
    seasonHashes: number[]
}