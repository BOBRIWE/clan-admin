export default interface IResponse {
    Response: object
    ErrorCode: number
    ThrottleSeconds: number
    ErrorStatus: string
    Message: string
    MessageData: object
    DetailedErrorTrace: string
}