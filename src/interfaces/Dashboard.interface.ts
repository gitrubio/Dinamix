import { AuthState } from "./auth.interfaces";
import { Collaborator } from "./collaborators.interface";
import { Organizationstate } from "./organizations.interface";

export interface  PropsNavBar {
    opened: boolean
    userInfo: AuthState
    currentOrg  : Organizationstate;
    organizations : Collaborator[];
    logOut?: () => void
}