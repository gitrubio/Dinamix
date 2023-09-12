import { collection, CollectionReference } from "firebase/firestore";
import { FirebaseDB } from "./firabase";
import { Organization } from '../interfaces/organizations.interface';
import { Collaborator } from '../interfaces/collaborators.interface';

export const OrganizationCollectionRef = collection(FirebaseDB, "organizations") as CollectionReference<Organization>;
export const CollaboratorCollectionRef = collection(FirebaseDB, "collaborators") as CollectionReference<Collaborator>;