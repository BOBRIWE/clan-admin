import IGroupV2 from './IGroupV2';
import IGroupMember from './IGroupMember';
import IGroupPotentialMember from './IGroupPotentialMember';

export default interface IGroupResponse {
    detail: IGroupV2
    founder: IGroupMember
    alliedIds: number[]
    parentGroup: IGroupV2
    allianceStatus: number
    groupJoinInviteCount: number
    currentUserMembershipsInactiveForDestiny: boolean
    currentUserMemberMap: IGroupMember[]
    currentUserPotentialMemberMap: IGroupPotentialMember[]
}