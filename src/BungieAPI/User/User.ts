import IGeneralUser from './IGeneralUser';
import BungieAPICredentials from '../BungieAPICredentials';
import IResponse from '../IResponse';

export default class User {
    static async getBungieNetUserById(userId: number): Promise<IGeneralUser> {
        const fetchResponse = await fetch(
            BungieAPICredentials.apiRoot + `/User/GetBungieNetUserById/${userId}/`,
            {
                method: 'GET',
                headers: {
                    'X-API-Key': BungieAPICredentials.apiKey
                }
            });

        const json = await fetchResponse.json() as IResponse;
        return json.Response as IGeneralUser;
    }
}