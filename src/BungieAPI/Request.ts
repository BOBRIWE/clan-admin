import IResponse from './IResponse';
import BungieAPICredentials from './BungieAPICredentials';
import QueryString from 'query-string';

export default class Request {
    private readonly _requestPath: string;

    constructor(requestPath: string) {
        this._requestPath = requestPath;
    }

    async send(): Promise<IResponse> {
        try {
            const fetchResponse = await fetch(
                BungieAPICredentials.apiRoot + this._requestPath,
                {
                    method: 'GET',
                    headers: {
                        'X-API-Key': BungieAPICredentials.apiKey,
                        'Authorization' : 'Bearer CLrVARKGAgAgDHoDYdWdwjJ3Ur/Oz5ubqHc+6tAxwcckLizDOt7kLxTgAAAAFaKjq+Ztb4fqmKwKGbSfh4wq3T8Mvviz+xzTSN9ZmZAYlwd3kvAXtA5aH8ODXedsM6dDVYCP0u1cz3Ga9PVMipb2sUtV/OqlOTDcs/tDs79KK7NCXv1XPvKYA/o/2ydR05nP3NiKSfpBEmoL9vlrZZ21RruALsJKASSHa8C8EOdl6D7aoxJZa2zpSZXrC11NV7rU0SWjMMCoxDMtge9pXwlo0cO6WOAMauaI6mU2q8c9zlrqfN5o6QgbeWwvWt6JE5krCooDsSc++JYcM7+Qy4FN/5F8UmTDiU1QxhwxfgQ='
                    }
                });
            return await fetchResponse.json();
        }catch (e) {
            console.log(e);
            return {} as Promise<IResponse>;
        }
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