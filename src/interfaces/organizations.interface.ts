import { RollCollaborator } from "./collaborators.interface";

export interface Organization {
    name: string;
    avatar: string
}

export interface OrganizationFirabase extends Organization {
    id: string;
}

export interface Organizationstate {
    id: string | null;
    name: string;
    avatar: string
    rol: RollCollaborator
}