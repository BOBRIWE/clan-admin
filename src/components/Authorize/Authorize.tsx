import React from 'react';
import {Redirect, RouteComponentProps} from 'react-router-dom';
import QueryString from 'query-string';
import OAuth from '../../BungieAPI/OAuth/OAuth';
import GroupsV2 from '../../BungieAPI/GroupsV2/GroupsV2';
import BungieMembershipType from '../../BungieAPI/BungieMembershipType';
import GroupType from '../../BungieAPI/GroupsV2/GroupType';

interface IAuthorizeProps extends RouteComponentProps {

}

interface IAuthorizeState {
    redirect: boolean
    clanId: number
}

export default class Authorize extends React.Component<IAuthorizeProps, IAuthorizeState> {
    constructor(props: IAuthorizeProps) {
        super(props);

        this.state = {
            redirect: false,
            clanId: 0
        };
    }
    componentDidMount(): void {
        const { code } = QueryString.parse(this.props.location.search);

        const token = OAuth.getAccessToken(code as string);

        token.then((token) => {
            OAuth.saveAccessToken(token);
            const clan = GroupsV2.getGroupsForMember(BungieMembershipType.BungieNext, token.membership_id, GroupType.Clan);

            clan.then((clan) => {
                this.setState({
                    redirect: true,
                    clanId: clan.results[0].group.groupId
                });
            });
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/clan/" + this.state.clanId}/>
        }
        return (
            <h1>Authentication...</h1>
        );
    }
};