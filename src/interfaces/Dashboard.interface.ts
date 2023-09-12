import { Collaborator } from "./collaborators.interface";
import { Organizationstate } from "./organizations.interface";

export interface  PropsNavBar {
    currentOrg  : Organizationstate;
    organizations : Collaborator[];
}