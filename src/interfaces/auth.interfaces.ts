import { Collaborator } from "./collaborators.interface";
import { Organization } from "./organizations.interface";

export interface IUser {
    email: string;
    password: string;
}
export type StatusAuth = 'checking' | 'authenticated' | 'not-authenticated';

export interface AuthState {
	status: StatusAuth;
	uid: string | null;
	email?: string | null;
	displayName: string | null;
	photoURL: string | null;
	errorMessage?: any;
	isUpdateProfile: boolean;
    organizations : Collaborator[];
}

export type TStatusConection = 'initial' | 'not-conection' | 'conection';