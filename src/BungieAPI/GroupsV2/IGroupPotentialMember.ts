import IGroupUserInfoCard from './IGroupUserInfoCard';
import IUserInfoCard from '../User/IUserInfoCard';

export default interface IGroupPotentialMember {
    potentialStatus: number
    groupId: number
    destinyUserInfo: IGroupUserInfoCard
    bungieNetUserInfo: IUserInfoCard
    joinDate: Date
}