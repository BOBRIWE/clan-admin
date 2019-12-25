import App from '../components/App/App';
import { connect } from 'react-redux';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {IRootReducer} from '../reducers';
import {clanMembersFetch, clanResponseFetch} from '../store/clan/actions';
import {IClanState} from '../store/clan/types';
import {IDefinitionsState} from '../store/definitions/types';
import {definitionsFetch} from '../store/definitions/actions';

interface IAppURLParams {
    clan?: string | undefined;
}

export interface IAppContainerProps extends RouteComponentProps<IAppURLParams>, IClanState, IDefinitionsState {
    clanMembersFetch: (id: number) => void
    clanResponseFetch: (id: number) => void
    definitionsFetch: (lang: string) => void
}

interface IAppContainerState extends IRootReducer {

}

function AppContainer (props: IAppContainerProps) {
    return <App {...props} />;
}

function mapStateToProps (state: IAppContainerState) {
    return {
        clanMembers: state.clan.clanMembers,
        clanResponse: state.clan.clanResponse,
        definitions: state.definitions.definitions
    };
}

export default connect(mapStateToProps, {
    clanMembersFetch: clanMembersFetch,
    clanResponseFetch: clanResponseFetch,
    definitionsFetch: definitionsFetch
})(AppContainer);