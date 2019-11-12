import IUserInfoCard from '../../../User/IUserInfoCard';

export default interface IDestinyProfileComponent {
    userInfo: IUserInfoCard
    dateLastPlayed: Date
    versionsOwned: number
    characterIds: number[]
    seasonHashes: number[]
}