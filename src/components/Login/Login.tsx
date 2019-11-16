import React from 'react';
import BungieAPICredentials from '../../BungieAPI/BungieAPICredentials';
import QueryString from 'query-string';

export default class Login extends React.Component{
    render() {
        const authorizeOptions = {
            client_id: BungieAPICredentials.clientId,
            response_type: 'code',
            state: BungieAPICredentials.uuid
        };

        return (
            <main>
                <a href={`https://www.bungie.net/en/oauth/authorize?${QueryString.stringify(authorizeOptions)}`}>Login!</a>
            </main>
        );
    }
}