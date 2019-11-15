import React from 'react';
import BungieAPICredentials from '../../BungieAPI/BungieAPICredentials';
import QueryString from 'query-string';
import GroupsV2 from '../../BungieAPI/GroupsV2/GroupsV2';
import ClanBanner from '../../ClanBanner';

export default class Login extends React.Component{
    async test() {
        const clan = await GroupsV2.getClan(3990079);
        const cb = new ClanBanner(clan.detail.clanInfo.clanBannerData);
        return cb.render();
    }


    render() {
        const authorizeOptions = {
            client_id: BungieAPICredentials.clientId,
            response_type: 'code',
            state: BungieAPICredentials.uuid
        };

        // let settingsR = Common.getCommonSettings();
        //
        // settingsR.then((settings) => {
        //     console.log(settings);
        // });

        this.test().then((d) => {
            console.log(d);
        });


        return (
            <main>
                <a href={`https://www.bungie.net/en/oauth/authorize?${QueryString.stringify(authorizeOptions)}`}>Login!</a>
            </main>
        );
    }
}