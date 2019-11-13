import IGroupV2 from './IGroupV2';
import IGroupMember from './IGroupMember';

export default interface IGroupMembership {
    member: IGroupMember
    group: IGroupV2
}