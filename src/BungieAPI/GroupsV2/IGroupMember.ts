import IGroupUserInfoCard from './IGroupUserInfoCard';
import IUserInfoCard from '../User/IUserInfoCard';
import RuntimeGroupMemberType from './RuntimeGroupMemberType';

export default interface IGroupMember {
    memberType: RuntimeGroupMemberType
    isOnline: boolean
    lastOnlineStatusChange: number
    groupId: number
    destinyUserInfo: IGroupUserInfoCard
    bungieNetUserInfo: IUserInfoCard
    joinDate: string
}