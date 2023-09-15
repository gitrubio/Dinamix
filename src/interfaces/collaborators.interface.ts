import { OrganizationFirabase } from "./organizations.interface";

export interface Collaborator {
    Organization: OrganizationFirabase;
    rol: RollCollaborator;
    email: string;
    name: string;
    userId: string;
    avatar: string;
}
export interface justCollaborator {
    rol: RollCollaborator;
    email: string;
    name: string;
    userId: string;
    avatar: string;
}

export type RollCollaborator = 'owner' | 'admin' | 'editor' | 'viewer';