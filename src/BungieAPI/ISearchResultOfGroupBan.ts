import IPagedQuery from './Queries/IPagedQuery';
import IGroupBan from './GroupsV2/IGroupBan';

export default interface ISearchResultOfGroupBan {
    results: IGroupBan[]
    totalResults: number
    hasMore: boolean
    query: IPagedQuery
    replacementContinuationToken: string
    useTotalResults: boolean
}