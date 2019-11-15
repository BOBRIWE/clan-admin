import React from 'react';
import './App.scss';
import MembersList from '../MembersList/MembersList';
import MemberInfo from '../MemberInfo/MemberInfo';
import { RouteComponentProps } from 'react-router-dom';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import GroupsV2 from '../../BungieAPI/GroupsV2/GroupsV2';
// import Header from '../Header/Header';
// import IGroupV2 from '../BungieAPI/GroupsV2/IGroupV2';
import IGroupResponse from '../../BungieAPI/GroupsV2/IGroupResponse';

interface IAppURLParams {
    clan?: string | undefined;
}

interface IAppProps extends RouteComponentProps<IAppURLParams>{
}

interface IAppState {
    members: IGroupMember[]
    errorMessage: string
    clan?: IGroupResponse
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            members: [],
            errorMessage: ''
        };
    }

    componentDidMount(): void {
        const id = parseInt(this.props.match.params.clan as string);
        const membersRequest = GroupsV2.getClanMembers(id);
        const clanRequest = GroupsV2.getClan(id);

        clanRequest
            .then((clan) => {
                console.log(clan);
                this.setState({
                    clan: clan
                });
            })
            .catch((e: Error) => {
                console.error(e.message);
            });

        membersRequest
            .then((members) => {
                this.setState({
                    members: members.results,
                    errorMessage: ''
                });
            })
            .catch((e: Error) => {
                console.error(e.message);
                this.setState({
                    errorMessage: e.message
                });
            });
    }

    render() {
        return (
            <section className="App">
                <main className="App-article">
                    {this.state.clan !== undefined ? <img src={'https://www.bungie.net' + this.state.clan.detail.avatarPath}/> : ''}
                    {this.state.clan !== undefined ? <img src={'https://www.bungie.net' + this.state.clan.detail.bannerPath}/> : ''}
                    <MembersList members={this.state.members}/>
                    <MemberInfo />
                </main>
            </section>
        );
    }
}
