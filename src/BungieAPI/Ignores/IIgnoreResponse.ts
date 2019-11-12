import IgnoreStatus from './IgnoreStatus';

export default interface IIgnoreResponse {
    isIgnored: boolean
    ignoreFlags: IgnoreStatus
}