import IUserInfoCard from '../../User/IUserInfoCard';
import IDestinyProfileUserInfoCard from './IDestinyProfileUserInfoCard';
import IDestinyErrorProfile from './IDestinyErrorProfile';

export default interface IDestinyLinkedProfilesResponse {
    profiles: IDestinyProfileUserInfoCard[]
    bnetMembership: IUserInfoCard
    profilesWithErrors: IDestinyErrorProfile[]
}