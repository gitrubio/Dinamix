import { OrganizationFirabase } from "./organizations.interface";

export interface Collaborator {
    Organization: OrganizationFirabase;
    rol: RollCollaborator;
    userId: string;
}

export type RollCollaborator = 'owner' | 'admin' | 'editor' | 'viewer';