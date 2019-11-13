import uuidv4 from 'uuid/v4';

export default class BungieAPICredentials {
    static get apiRoot(): string {
        return 'https://stats.bungie.net/Platform';
    }

    static get apiKey(): string {
        return 'd46b0bf7b2ae4c05bf7f3b0f3df4be77';
    }

    static get clientSecret(): string {
        return 'zBCvMg0X0Ymo3dCOhfMOyeHrWqFasf1dDWupJR9jwHs';
    }

    static get uuid(): string {
        return uuidv4();
    }
}