import { Collaborator, RollCollaborator } from "./collaborators.interface";

export interface Organization {
    name: string;
    avatar: string
}

export interface OrganizationFirabase extends Organization {
    id: string;
}

export interface CurrentOrganizationstate {
    id: string | null;
    name: string;
    avatar: string
    rol: RollCollaborator
}

export interface PropsOrganizationCard {
    organization : Collaborator
    onClick: (organization: CurrentOrganizationstate) => void
}

export interface PropsOrganizationCardList {
    data : Collaborator[]
    currentId?: string | null
    onClick: (organization: CurrentOrganizationstate) => void
}

export interface OrganizationState {
    data: Collaborator[];
    status:  'loading' | 'completed';
}
