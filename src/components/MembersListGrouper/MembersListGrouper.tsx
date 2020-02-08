import React from 'react';
import MembersListGroup from '../MembersListGroup/MembersListGroup';
import IGroupMember from '../../BungieAPI/GroupsV2/IGroupMember';
import {ISupportedDefinitions} from '../../BungieAPI/Destiny/Definitions/SupportedDefinitions';
import RuntimeGroupMemberType from '../../BungieAPI/GroupsV2/RuntimeGroupMemberType';
import './MembersListGrouper.scss';

export interface IMembersListGrouperProps {
    clanMembers: IGroupMember[]
    definitions: ISupportedDefinitions
    selectedMemberCallback: (id: string) => void
}

interface IMembersListGrouperState {
    admins: IGroupMember[]
    otherMembers: IGroupMember[]
}

class MembersListGrouper extends React.Component<IMembersListGrouperProps, IMembersListGrouperState> {
    constructor(props: IMembersListGrouperProps) {
        super(props);
        this.state = {
            admins: [],
            otherMembers: []
        }
    }

    componentDidMount(): void {
        this.updateLists();
    }

    componentDidUpdate(prevProps: Readonly<IMembersListGrouperProps>, prevState: Readonly<IMembersListGrouperState>, snapshot?: any): void {
        if (JSON.stringify(prevProps.clanMembers) === JSON.stringify(this.props.clanMembers)) return;
        this.updateLists();
    }

    updateLists() {
        const clanMembers = [...this.props.clanMembers];
        clanMembers.sort((a,b) =>{
            return new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime();
        });

        const admins = [];
        let otherMembers = [...clanMembers];
        for (let user of clanMembers) {
            if (user.memberType !== RuntimeGroupMemberType.Member && user.memberType !== RuntimeGroupMemberType.Beginner) {
                admins.push(user);
                const indexToRemove = otherMembers.indexOf(user);
                otherMembers.splice(indexToRemove, 1);
            }
        }

        this.setState({
            admins: admins,
            otherMembers: otherMembers
        });
    }

    render() {
        return (
            <div className="MembersListGrouper">
                <MembersListGroup
                    selectUserCallback={this.props.selectedMemberCallback}
                    groupName={'Administration'}
                    members={this.state.admins}
                    definitions={this.props.definitions}
                />
                <MembersListGroup
                    selectUserCallback={this.props.selectedMemberCallback}
                    groupName={'Clan Members'}
                    members={this.state.otherMembers}
                    definitions={this.props.definitions}
                />
            </div>
        );
    }
}

export default MembersListGrouper