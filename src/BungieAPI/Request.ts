import IResponse from './IResponse';
import BungieAPICredentials from './BungieAPICredentials';

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
                body: 'grant_type=authorization_code&code=af988a9380bcd7a00d7407e8ea9371a8&client_id=30543&client_secret=zBCvMg0X0Ymo3dCOhfMOyeHrWqFasf1dDWupJR9jwHs',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-API-Key': BungieAPICredentials.apiKey
                    // 'Authorization' : 'Bearer a1a3da920a10b28cde5486103e5025bc'
                    //https://localhost:3000/?code=5aa7d827c3a69141fb8de29eac0edc06&state=6i0mkLx79dfdsfsdfsdfsdfgHp91nzWVeHrzHG4
                    //https://localhost:3000/?code=8e79099f452af51dec3f6ec38521122f&state=6i0mkLx7sdfdsfsfsdfaegssefgrhedrgwseg9Hp91nzWVeHrzHG4
                    // {"access_token":"CLrVARKGAgAgDHoDYdWdwjJ3Ur/Oz5ubqHc+6tAxwcckLizDOt7kLxTgAAAAFaKjq+Ztb4fqmKwKGbSfh4wq3T8Mvviz+xzTSN9ZmZAYlwd3kvAXtA5aH8ODXedsM6dDVYCP0u1cz3Ga9PVMipb2sUtV/OqlOTDcs/tDs79KK7NCXv1XPvKYA/o/2ydR05nP3NiKSfpBEmoL9vlrZZ21RruALsJKASSHa8C8EOdl6D7aoxJZa2zpSZXrC11NV7rU0SWjMMCoxDMtge9pXwlo0cO6WOAMauaI6mU2q8c9zlrqfN5o6QgbeWwvWt6JE5krCooDsSc++JYcM7+Qy4FN/5F8UmTDiU1QxhwxfgQ=","token_type":"Bearer","expires_in":3600,"refresh_token":"CLrVARKGAgAglQlePBiyq80cTAIZpOS112Pa3JDpUduEOHZ2Be7vdJ/gAAAAgJcy4+qkkdSIcWoPfLyTLtLiPyDmB3JDJKPP0kbCkm+d5yveHner29G7CcxhDgKOqYG4uRVu8zZKPDlVzliUFu/hNU4/29cToQBctvJchGFDpMfUXQGaaCbM6rx1QM3Hj3ZFLYnZAKP71h5n0ozTqGFs/TmxKho7LVNtC/McobdSzwoKKHFhlk7xXQK61LvBE3oN/IS4+Tigx8ymP1ww+rhhyGd2zb3IAge2UyJyfX/MF4Ni4bE4ksF5XWUIAkalbfsJvbZfDe1Rse1Kys3Up+SL7kwqXiF4f5B54XdqDo4=","refresh_expires_in":7776000,"membership_id":"18454839"}
                }
            });
        return await fetchResponse.json();
    }
}