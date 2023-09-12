export interface ResponseService<T> {
    data: T;
    error: ErrorMessage | null;
}

export interface ErrorMessage {
    type: TypeError;
    message: string;
}


export type TypeError = 'request' | 'validation';