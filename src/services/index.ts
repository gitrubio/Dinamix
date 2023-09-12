import { CollaboratorsService } from "./collaborators.service";
import { CollaboratorCollectionRef, OrganizationCollectionRef } from "../firebase/providers";
import { OrganizationsService } from "./organizations.service";

export const CollaboratorServices =  new CollaboratorsService(CollaboratorCollectionRef)
export const OrganizationServices =  new OrganizationsService(OrganizationCollectionRef)