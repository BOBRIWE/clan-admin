import App from '../components/App/App';
import { connect } from 'react-redux';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IClanMembersState } from '../constants/ClanMembersConstants';
import {IRootReducer} from '../reducers';
import { clanMembersFetch } from '../actions/ClanActions';

interface IAppURLParams {
    clan?: string | undefined;
}

export interface IAppContainerProps extends RouteComponentProps<IAppURLParams>, IClanMembersState{
    clanMembersFetch: (id: number) => void
}

interface IAppContainerState extends IRootReducer {

}

function AppContainer (props: IAppContainerProps) {
    return <App {...props} />;
}

function mapStateToProps (state: IAppContainerState) {
    return {
        ...state.clan
    };
}

export default connect(mapStateToProps, {
    clanMembersFetch: clanMembersFetch
})(AppContainer);