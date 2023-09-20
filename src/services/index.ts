import { CollaboratorsService } from "./collaborators.service";
import { CollaboratorCollectionRef, OrganizationCollectionRef, UserCollectionRef } from "../firebase/providers";
import { OrganizationsService } from "./organizations.service";
import { UserService } from "./auth.service";

export const CollaboratorServices =  new CollaboratorsService(CollaboratorCollectionRef)
export const OrganizationServices =  new OrganizationsService(OrganizationCollectionRef)
export const UserServices =  new UserService(UserCollectionRef)