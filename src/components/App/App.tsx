import React from 'react';
import './App.scss';
import MembersList from '../MembersList/MembersList';
import MemberInfo from '../MemberInfo/MemberInfo';
import Header from '../Header/Header';
import {IAppContainerProps} from '../../containers/AppContainer';

interface IAppProps extends IAppContainerProps{
}

interface IAppState {
    errorMessage: string
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            errorMessage: ''
        };
    }

    componentDidMount(): void {
        const id = parseInt(this.props.match.params.clan as string);
        this.props.definitionsFetch('ru');
        this.props.clanMembersFetch(id);
        this.props.clanResponseFetch(id);
    }

    render() {
        return (
            <section className="App">
                { this.props.clanResponse ? <Header title={this.props.clanResponse.detail.name} /> : null }
                <main className="App-article">
                    {this.props.definitions !== null ? <MembersList groupName={'Clan Members'} members={this.props.clanMembers} definitions={this.props.definitions}/> : null}
                    <MemberInfo />
                </main>
            </section>
        );
    }
}
