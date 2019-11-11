import IGroupResponse from './IGroupResponse';
import BungieAPICredentials from '../BungieAPICredentials';
import IResponse from '../IResponse';
import ISearchResultOfGroupMember from './ISearchResultOfGroupMember';

export default class GroupsV2 {
    static async getClan(clanId: number): Promise<IGroupResponse> {
        const fetchResponse = await fetch(
            BungieAPICredentials.apiRoot + `/GroupV2/${clanId}/`,
            {
                method: 'GET',
                headers: {
                    'X-API-Key': BungieAPICredentials.apiKey
                }
            });

        const json = await fetchResponse.json() as IResponse;
        return json.Response as IGroupResponse;
    }

    static async getClanMembers(clanId: number): Promise<ISearchResultOfGroupMember> {
        const fetchResponse =  await fetch(
            BungieAPICredentials.apiRoot + `/GroupV2/${clanId}/Members/`,
            {
                method: 'GET',
                headers: {
                    'X-API-Key': BungieAPICredentials.apiKey
                }
            });

        const json = await fetchResponse.json() as IResponse;
        return json.Response as ISearchResultOfGroupMember;
    }
}