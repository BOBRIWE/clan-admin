import {connect} from 'react-redux';
import MemberInfo from '../components/MemberInfo/MemberInfo';
import React from 'react';
import {IRootReducer} from '../reducers';
import {memberInfoPostGameCarnageReportFetch, memberInfoProfileFetch} from '../store/memberInfo/actions';
import DestinyComponentType from '../BungieAPI/Destiny/DestinyComponentType';
import BungieMembershipType from '../BungieAPI/BungieMembershipType';
import ActivityModeType from '../BungieAPI/Destiny/Definitions/ActivityModeType';
import {IMemberInfoState} from '../store/memberInfo/types';
import {ISupportedDefinitions} from '../BungieAPI/Destiny/Definitions/SupportedDefinitions';

export interface IMemberInfoContainerProps extends IMemberInfoState {
    memberInfoFetch: (id: string, destinyComponentType: DestinyComponentType, bungieMembershipType: BungieMembershipType, activityModeType: ActivityModeType) => void
    postGameCarnageReportFetch: (id: string) => void
    selectedMember: string
    definitions: ISupportedDefinitions | null
}

interface IMemberInfoContainerState extends IRootReducer {

}

function MemberInfoContainer(props: IMemberInfoContainerProps) {
    return <MemberInfo {...props} />;
}

function mapStateToProps (state: IMemberInfoContainerState) {
    return {
        activityHistories: state.memberInfo.activityHistories,
        memberInfoDestinyProfile: state.memberInfo.memberInfoDestinyProfile,
        memberInfoLinkedAccounts: state.memberInfo.memberInfoLinkedAccounts,
        postGameCarnageReport: state.memberInfo.postGameCarnageReport,
        definitions: state.definitions.definitions
    };
}

export default connect(mapStateToProps, {
    memberInfoFetch: memberInfoProfileFetch,
    postGameCarnageReportFetch: memberInfoPostGameCarnageReportFetch
})(MemberInfoContainer);