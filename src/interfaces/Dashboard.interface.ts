import { AuthState } from "./auth.interfaces";
import { Collaborator } from "./collaborators.interface";
import { CurrentOrganizationstate } from "./organizations.interface";
import { sectionType } from './GlobalModal.interface';

export interface  PropsNavBar {
    opened: boolean
    userInfo: AuthState
    currentOrg  : CurrentOrganizationstate;
    organizations : Collaborator[];
    openModal: ( section : sectionType) => void
    logOut?: () => void
}