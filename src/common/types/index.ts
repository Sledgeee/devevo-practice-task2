export type StatusResponse = Promise<{ status: number }>;

export type GetResponse<T> = Promise<T>;

export type GetAllResponse<T> = Promise<Array<T>>;
