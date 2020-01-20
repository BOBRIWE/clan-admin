import {connect} from 'react-redux';
import MemberInfo from '../components/MemberInfo/MemberInfo';
import React from 'react';
import {IRootReducer} from '../reducers';
import {memberInfoPostGameCarnageReportFetch, memberInfoProfileFetch} from '../store/memberInfo/actions';
import DestinyComponentType from '../BungieAPI/Destiny/DestinyComponentType';
import BungieMembershipType from '../BungieAPI/BungieMembershipType';
import ActivityModeType from '../BungieAPI/Destiny/Definitions/ActivityModeType';
import {IMemberInfoState} from '../store/memberInfo/types';

export interface IMemberInfoContainerProps extends IMemberInfoState {
    memberInfoFetch: (id: string, destinyComponentType: DestinyComponentType, bungieMembershipType: BungieMembershipType, activityModeType: ActivityModeType) => void
    postGameCarnageReportFetch: (id: string) => void
}

interface IMemberInfoContainerState extends IRootReducer {

}

function MemberInfoContainer(props: IMemberInfoContainerProps) {
    return <MemberInfo {...props} />;
}

function mapStateToProps (state: IMemberInfoContainerState): IMemberInfoState {
    return {
        activityHistories: state.memberInfo.activityHistories,
        memberInfoDestinyProfile: state.memberInfo.memberInfoDestinyProfile,
        memberInfoLinkedAccounts: state.memberInfo.memberInfoLinkedAccounts,
        postGameCarnageReport: state.memberInfo.postGameCarnageReport
    };
}

export default connect(mapStateToProps, {
    memberInfoFetch: memberInfoProfileFetch,
    postGameCarnageReportFetch: memberInfoPostGameCarnageReportFetch
})(MemberInfoContainer);