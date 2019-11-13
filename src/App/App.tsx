import React from 'react';
import './App.scss';
import MembersList from '../MembersList/MembersList';
import MemberInfo from '../MemberInfo/MemberInfo';
import { RouteComponentProps } from 'react-router-dom';

interface IAppURLParams {
    clan?: string | undefined;
}

interface IAppProps extends RouteComponentProps<IAppURLParams>{
}

interface IAppState {
}

export default class App extends React.Component<IAppProps, IAppState> {

    componentDidMount(): void {
        alert(this.props.match.params.clan);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                </header>
                <article className="App-article">
                    <MembersList />

                    <MemberInfo />
                </article>
            </div>
        );
    }
}
