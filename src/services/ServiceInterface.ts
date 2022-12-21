export default interface ServiceInterface<T> {
    Fail: boolean,
    failReason? : string,
    data? : T
}