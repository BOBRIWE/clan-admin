import IResponse from './IResponse';
import BungieAPICredentials from './BungieAPICredentials';
import QueryString from 'query-string';
import OAuth from './OAuth/OAuth';
import PlatformErrorCodes from './Exceptions/PlatformErrorCodes';

export default class Request {
    private readonly _requestPath: string;

    constructor(requestPath: string) {
        this._requestPath = requestPath;
    }

    async get<TResponse>(): Promise<IResponse<TResponse>> {
        const fetchResponse = await fetch(
            BungieAPICredentials.apiRoot + this._requestPath,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': BungieAPICredentials.apiKey
                }
            });

        const response = await fetchResponse.json() as IResponse<TResponse>;

        if (response.ErrorCode !== PlatformErrorCodes.Success) {
            throw new Error(response.Message);
        }

        return response;
    }

    async post<TBody, TResponse>(body: TBody): Promise<IResponse<TResponse>> {
        const strBody = JSON.stringify(body);
        const token = OAuth.accessToken.access_token;

        const fetchResponse = await fetch(
            BungieAPICredentials.apiRoot + this._requestPath,
            {
                method: 'POST',
                body: strBody,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-API-Key': BungieAPICredentials.apiKey,
                    'Authorization' : 'Bearer ' + token
                }
            });
        return await fetchResponse.json();
    }

    static async getAccessToken() {
        const fetchResponse = await fetch(
            'https://www.bungie.net/platform/app/oauth/token/',
            {
                method: 'POST',
                body: QueryString.stringify({
                    grant_type: 'authorization_code',
                    code: 'af988a9380bcd7a00d7407e8ea9371a8',
                    client_id: 30543,
                    client_secret: 'zBCvMg0X0Ymo3dCOhfMOyeHrWqFasf1dDWupJR9jwHs'
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-API-Key': BungieAPICredentials.apiKey
                }
            });
        return await fetchResponse.json();
    }
}