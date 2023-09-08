export interface IUser {
    email: string;
    password: string;
}

export type TStatusConection = 'initial' | 'not-conection' | 'conection';