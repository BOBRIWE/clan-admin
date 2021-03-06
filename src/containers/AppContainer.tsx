import App from '../components/App/App';
import { connect } from 'react-redux';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {IRootReducer} from '../reducers';
import {changeSelectedMember, clanMembersFetch, clanResponseFetch} from '../store/clan/actions';
import {IClanState} from '../store/clan/types';
import {IDefinitionsState} from '../store/definitions/types';
import {definitionsFetch} from '../store/definitions/actions';
import DestinyComponentType from '../BungieAPI/Destiny/DestinyComponentType';
import BungieMembershipType from '../BungieAPI/BungieMembershipType';
import ActivityModeType from '../BungieAPI/Destiny/Definitions/ActivityModeType';
import {memberInfoProfileFetch} from '../store/memberInfo/actions';

interface IAppURLParams {
    clan?: string | undefined;
}

export interface IAppContainerProps extends RouteComponentProps<IAppURLParams>, IClanState, IDefinitionsState {
    clanMembersFetch: (id: number) => void
    clanResponseFetch: (id: number) => void
    definitionsFetch: (lang: string) => void
    changeSelectedMember: (id: string) => void
    memberInfoFetch: (id: string, destinyComponentType: DestinyComponentType, bungieMembershipType: BungieMembershipType, activityModeType: ActivityModeType, page: number, count: number) => void
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
        definitions: state.definitions.definitions,
        selectedMember: state.clan.selectedMember
    };
}

export default connect(mapStateToProps, {
    clanMembersFetch: clanMembersFetch,
    clanResponseFetch: clanResponseFetch,
    definitionsFetch: definitionsFetch,
    changeSelectedMember: changeSelectedMember,
    memberInfoFetch: memberInfoProfileFetch
})(AppContainer);