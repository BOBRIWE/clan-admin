import IPagedQuery from '../Queries/IPagedQuery';
import IGroupMembership from './IGroupMembership';

export default interface IGetGroupsForMemberResponse {
    areAllMembershipsInactive: boolean[]
    results: IGroupMembership[]
    totalResults: number
    hasMore: boolean
    query: IPagedQuery
    replacementContinuationToken: string
    useTotalResults: boolean
}