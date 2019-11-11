import IGroupMember from './IGroupMember';
import IPagedQuery from '../Queries/IPagedQuery';

export default interface ISearchResultOfGroupMember {
    results: IGroupMember[]
    totalResults: number
    hasMore: boolean
    query: IPagedQuery
    replacementContinuationToken: string
    useTotalResults: boolean
}