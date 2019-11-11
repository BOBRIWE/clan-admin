export default interface IPagedQuery {
    itemsPerPage: number
    currentPage: number
    requestContinuationToken: string
}