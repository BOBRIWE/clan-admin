export default interface IResponse<TResponse> {
    Response: TResponse
    ErrorCode: number
    ThrottleSeconds: number
    ErrorStatus: string
    Message: string
    MessageData: object
    DetailedErrorTrace: string
}