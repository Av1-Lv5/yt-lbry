interface ServiceLoading {
    status: "loading";
}
interface ServiceLoaded<T> {
    status: "loaded";
    payload: T;
}
interface ServiceError {
    status: "error";
    error: Error;
}
export type CollectionService<T> =
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;
