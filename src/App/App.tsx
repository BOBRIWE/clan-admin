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
    clanId: number
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            clanId: NaN
        };
    }

    componentDidMount(): void {
        this.setState({
            clanId: parseInt(this.props.match.params.clan as string)
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">

                </header>
                <article className="App-article">
                    {isNaN(this.state.clanId) ? <MembersList clanId={this.state.clanId}/> : ''}

                    <MemberInfo />
                </article>
            </div>
        );
    }
}
