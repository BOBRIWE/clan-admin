import QueryString from 'query-string';
import BungieAPICredentials from '../BungieAPICredentials';

interface IAccessTokenObj {
    access_token: string
    expires_in: number
    membership_id: number
    refresh_expires_in: number
    refresh_token: string
    token_type: string
}

export default class OAuth {
    static async getAccessToken(code: string): Promise<IAccessTokenObj> {
        const fetchResponse = await fetch(
            'https://www.bungie.net/platform/app/oauth/token/',
            {
                method: 'POST',
                body: QueryString.stringify({
                    grant_type: 'authorization_code',
                    code: code,
                    client_id: BungieAPICredentials.clientId,
                    client_secret: BungieAPICredentials.clientSecret
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-API-Key': BungieAPICredentials.apiKey
                }
            });
        return await fetchResponse.json();
    }

    static saveAccessToken(tokenObj: IAccessTokenObj): void {
        localStorage.setItem('authorization', JSON.stringify(tokenObj));
    }

    static get accessToken(): IAccessTokenObj {
        const str = localStorage.getItem('authorization') as string;
        return JSON.parse(str);
    }
}