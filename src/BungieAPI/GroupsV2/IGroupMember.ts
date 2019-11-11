import IGroupUserInfoCard from './IGroupUserInfoCard';
import IUserInfoCard from './IUserInfoCard';

export default interface IGroupMember {
    memberType: number
    isOnline: boolean
    lastOnlineStatusChange: string
    groupId: number
    destinyUserInfo: IGroupUserInfoCard
    bungieNetUserInfo: IUserInfoCard
    joinDate: Date
}