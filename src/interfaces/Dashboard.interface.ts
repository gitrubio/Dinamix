import { AuthState } from "./auth.interfaces";
import { Collaborator } from "./collaborators.interface";
import { CurrentOrganizationstate } from "./organizations.interface";

export interface  PropsNavBar {
    opened: boolean
    userInfo: AuthState
    currentOrg  : CurrentOrganizationstate;
    organizations : Collaborator[];
    open: () => void
    logOut?: () => void
}