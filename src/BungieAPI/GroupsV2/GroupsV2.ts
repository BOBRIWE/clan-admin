import IGroupResponse from './IGroupResponse';
import ISearchResultOfGroupMember from './ISearchResultOfGroupMember';
import Request from '../Request';
import ISearchResultOfGroupBan from '../ISearchResultOfGroupBan';
import IGetGroupsForMemberResponse from './IGetGroupsForMemberResponse';
import BungieMembershipType from '../BungieMembershipType';
import GroupType from './GroupType';
import IGroupBanRequest from './IGroupBanRequest';

export default class GroupsV2 {
    static async getClan(clanId: number): Promise<IGroupResponse> {
        const request = new Request(`/GroupV2/${clanId}/`);
        const response = await request.get<IGroupResponse>();

        return response.Response;
    }

    static async getClanMembers(clanId: number): Promise<ISearchResultOfGroupMember> {
        const request = new Request(`/GroupV2/${clanId}/Members/`);
        const response = await request.get<ISearchResultOfGroupMember>();

        return response.Response;
    }

    static async getBannedMembersOfGroup(groupId: number): Promise<ISearchResultOfGroupBan> {
        const request = new Request(`/GroupV2/${groupId}/Banned/`);
        const response = await request.get<ISearchResultOfGroupBan>();

        return response.Response;
    }


    static async getGroupsForMember(membershipType: BungieMembershipType, membershipId: number, groupType: GroupType, filter: number = 0): Promise<IGetGroupsForMemberResponse> {
        const request = new Request(`/GroupV2/User/${membershipType}/${membershipId}/${filter}/${groupType}/`);
        const response = await request.get<IGetGroupsForMemberResponse>();

        return response.Response;
    }

    static async banMember(membershipType: BungieMembershipType, membershipId: number, groupId: number): Promise<number> {
        const request = new Request(`/GroupV2/${groupId}/Members/${membershipType}/${membershipId}/Ban/`);
        const response = await request.post<IGroupBanRequest, number>({
            comment: 'Test',
            length: 4
        });

        return response.Response;
    }
}