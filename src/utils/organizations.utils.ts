import { RollCollaborator } from "../interfaces/collaborators.interface";

export const rol_replace : Record<RollCollaborator,string> = {
    'owner': 'Propietario',
    'admin': 'Administrador',
    'editor': 'Editor',
    'viewer': 'Espectador'
}

export const rol_color_replace : Record<RollCollaborator,string>= {
    'owner': 'red',
    'admin': 'orange',
    'editor': 'green',
    'viewer': 'cyan'
}