import IIgnoreResponse from '../Ignores/IIgnoreResponse';

export default interface IUserToUserContext {
    isFollowing: boolean
    ignoreStatus: IIgnoreResponse
    globalIgnoreEndDate: Date
}