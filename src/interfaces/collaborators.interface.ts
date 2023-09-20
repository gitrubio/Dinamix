import { OrganizationFirabase } from "./organizations.interface";

export interface Collaborator {
    id: string;
    Organization: OrganizationFirabase;
    rol: RollCollaborator;
    email: string;
    name: string;
    userId: string;
    avatar: string;
}
export interface  userData {
    displayName: string;
    photoURL: string;
}


export type RollCollaborator = 'owner' | 'admin' | 'editor' | 'guest';