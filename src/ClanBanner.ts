import IClanBanner from './BungieAPI/GroupsV2/IClanBanner';
import Destiny2 from './BungieAPI/Destiny2/Destiny2';
import initSqlJs from 'sql.js';
import BungieAPICredentials from './BungieAPI/BungieAPICredentials';


const sqljs = require('sql.js');


export default class ClanBanner {
    private readonly _bannerSettings: IClanBanner;
    constructor(bannerSettings: IClanBanner) {
        this._bannerSettings = bannerSettings;
    }

    async render() {
        const manifest = await Destiny2.getDestinyManifest();

        // const file = await fetch('https://www.bungie.net' + manifest.mobileClanBannerDatabasePath);


        const fetchResponse = await fetch(
            // file,
            'https://www.bungie.net' + manifest.mobileClanBannerDatabasePath,
            // 'src/clanbanner_sql_content_4b9de7e1000630f8a59bbc5ec50abef4.content',
            {
                method: 'GET',
                // mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain'
                }
            });


        // const u = await fetchResponse.arrayBuffer();
        const text = await fetchResponse.text();

        const sql = await sqljs();

        const db = sql.Database();


        return '';
    }
}

// /common/destiny2_content/clanbanner/clanbanner_sql_content_4b9de7e1000630f8a59bbc5ec50abef4.content