import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import {IAppContainerProps} from '../../containers/AppContainer';
import Separator from '../Separator/Separator';
import MemberInfoContainer from '../../containers/MemberInfoContainer';
import MembersListGrouper from '../MembersListGrouper/MembersListGrouper';

interface IAppProps extends IAppContainerProps {
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

    componentDidUpdate(prevProps: Readonly<IAppProps>, prevState: Readonly<IAppState>, snapshot?: any): void {
        if (JSON.stringify(this.props.clanMembers) !== JSON.stringify(prevProps.clanMembers)) {

        }
    }

    selectedMemberCallback(id: string) {
        this.props.changeSelectedMember(id);
    }

    render() {
        return (
            <section className="App">
                { this.props.clanResponse ? <Header title={this.props.clanResponse.detail.name} /> : null }
                <main className="App-article">
                    {
                        this.props.definitions !== null ?
                            <MembersListGrouper
                                definitions={this.props.definitions}
                                clanMembers={this.props.clanMembers}
                                selectedMemberCallback={this.selectedMemberCallback.bind(this)}
                            />
                                :
                            null
                    }
                    <Separator/>
                    {
                        this.props.selectedMember !== null ?
                            <MemberInfoContainer selectedMember={this.props.selectedMember}/>
                            :
                            null
                    }
                </main>
            </section>
        );
    }
}
