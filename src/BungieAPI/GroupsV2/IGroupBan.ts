import IUserInfoCard from '../User/IUserInfoCard';
import IGroupUserInfoCard from './IGroupUserInfoCard';

export default interface IGroupBan {
    groupId: number
    lastModifiedBy: IUserInfoCard
    createdBy: IUserInfoCard
    dateBanned: Date
    dateExpires: Date
    comment: string
    bungieNetUserInfo: IUserInfoCard
    destinyUserInfo: IGroupUserInfoCard
}