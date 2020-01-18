import {connect} from 'react-redux';
import MemberInfo from '../components/MemberInfo/MemberInfo';
import React from 'react';
import {IRootReducer} from '../reducers';
import {userGeneralUserFetch, userLinkedAccountsFetch} from '../store/user/actions';
import {IUserState} from '../store/user/types';

export interface IMemberInfoContainerProps extends IUserState {
    userLinkedAccountsFetch: (id: number) => void;
    generalUserFetch: (id: number) => void;
}

interface IMemberInfoContainerState extends IRootReducer {

}

function MemberInfoContainer(props: IMemberInfoContainerProps) {
    return <MemberInfo {...props}/>
}

function mapStateToProps (state: IMemberInfoContainerState) {
    return {
        userLinkedAccounts: state.user.userLinkedAccounts,
        generalUser: state.user.generalUser
    };
}

export default connect(mapStateToProps, {
    userLinkedAccountsFetch: userLinkedAccountsFetch,
    generalUserFetch: userGeneralUserFetch
})(MemberInfoContainer);