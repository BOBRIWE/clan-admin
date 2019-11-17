import React from 'react';
import BungieAPICredentials from '../../BungieAPI/BungieAPICredentials';
import QueryString from 'query-string';
import Destiny from '../../BungieAPI/Destiny/Destiny';
import SupportedDefinitions from '../../BungieAPI/Destiny/Definitions/SupportedDefinitions';

export default class Login extends React.Component{
    render() {
        const authorizeOptions = {
            client_id: BungieAPICredentials.clientId,
            response_type: 'code',
            state: BungieAPICredentials.uuid
        };

        const fetchResponse = fetch(
            'https://www.bungie.net/common/destiny2_content/json/ru/aggregate-7ab91c74-e8a4-40c7-9f70-16a4354125c0.json/',
            {
                method: 'GET'
            });

        fetchResponse
            .catch((e) => {
                console.error(e)
            })
            .then((d) => {

                console.log(d)
            });

        // const activityR = Destiny.getDefinition(SupportedDefinitions.DestinyActivityDefinition);
        // const activity2R = Destiny.getAllDefinitions();
        //
        // activityR
        //     .then((activity) => {
        //         console.log(activity);
        //     })
        //     .catch((e: Error) => {
        //         console.error(e);
        //     });
        //
        // activity2R
        //     .then((activity2) => {
        //         console.log(activity2);
        //     })
        //     .catch((e: Error) => {
        //         console.error(e);
        //     });

        return (
            <main>
                <a href={`https://www.bungie.net/en/oauth/authorize?${QueryString.stringify(authorizeOptions)}`}>Login!</a>
            </main>
        );
    }
}