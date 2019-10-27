class BungieAPI {
    private _apiRoot = 'https://www.bungie.net/Platform';
    private _apiKey = 'd46b0bf7b2ae4c05bf7f3b0f3df4be77';

    async getClan(): Promise<any> {
        return await fetch(this._apiRoot + '/GroupV2/3990079/', {
            method: 'GET',
            headers: {
                'X-API-Key': this._apiKey
            }
        });
    }

    async getClanMembers(clanId: number) {
        return await fetch(this._apiRoot + `/GroupV2/${clanId}/Members/`, {
            method: 'GET',
            headers: {
                'X-API-Key': this._apiKey
            }
        });
    }
}

export default BungieAPI;