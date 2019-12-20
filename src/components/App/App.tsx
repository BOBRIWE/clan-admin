import React from 'react';
import './App.scss';
import MembersList from '../MembersList/MembersList';
import MemberInfo from '../MemberInfo/MemberInfo';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import GroupsV2 from '../../BungieAPI/GroupsV2/GroupsV2';
import Header from '../Header/Header';
import Destiny from "../../BungieAPI/Destiny/Destiny";
import DefinitionsStorage from "../../LocalStorage/DefinitionsStorage";
import {IAppContainerProps} from '../../containers/AppContainer';

interface IAppProps extends IAppContainerProps{
}

interface IAppState {
    errorMessage: string
    clanTitle: string
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            errorMessage: '',
            clanTitle: ''
        };
    }

    componentDidMount(): void {
        const id = parseInt(this.props.match.params.clan as string);
        this.props.clanMembersFetch(id);
        // const membersRequest = GroupsV2.getClanMembers(id);
        const clanRequest = GroupsV2.getClan(id);

        this.updateDef().then(() => console.log('UPDATED!'));

        clanRequest
            .then((clan) => {
                this.setState({
                    clanTitle: clan.detail.name
                });
            })
            .catch((e: Error) => {
                console.error(e.message);
            });

        // membersRequest
        //     .then((members) => {
        //         this.setState({
        //             members: members.results,
        //             errorMessage: ''
        //         });
        //     })
        //     .catch((e: Error) => {
        //         console.error(e.message);
        //         this.setState({
        //             errorMessage: e.message
        //         });
        //     });
    }

    async updateDef() {
        const allDefinitions = await Destiny.getAllDefinitions('ru');
        await DefinitionsStorage.update(allDefinitions);
    }

    render() {
        return (
            <section className="App">
                <Header title={this.state.clanTitle} />
                <main className="App-article">
                    <MembersList groupName={'Clan Members'} members={this.props.clanMembers} />
                    <MemberInfo />
                </main>
            </section>
        );
    }
}
