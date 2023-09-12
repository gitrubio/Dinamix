

import { CollaboratorCollectionRef, OrganizationCollectionRef } from '../firebase/providers'
import { ResponseService } from '../interfaces/api.interface'
import { Collaborator } from '../interfaces/collaborators.interface'
import { Organization, OrganizationFirabase } from '../interfaces/organizations.interface';
import {
	addDoc,
	getDoc,
	getDocs,
	deleteDoc,
	updateDoc,
	query,
	where,
} from 'firebase/firestore'

export class OrganizationsService {
	constructor(
		private readonly OrganizationCollection = OrganizationCollectionRef
	) {}
	async create(org: Organization): Promise<ResponseService<OrganizationFirabase| null>> {
		try {
			const querySnapshot = await addDoc(
				this.OrganizationCollection,
				org
			)
			
			return { data: {
                id: querySnapshot.id,
                ...org
            }, error: null }
		} catch (error) {
			console.error('Error al registrar organización', error)
			return { data: null, error: {
                message: 'Error al registrar organización',
                type: 'request',
            } }
		}
	}
	/* async getOrganizationsByCollaborator(
		userID: string
	): Promise<ResponseService<Collaborator[]>> {
		try {
			const organizationsByUser: Collaborator[] = []
			const queryData = query(
				this.CollaboratorCollection,
				where('userId', '==', userID)
			)
			const querySnapshot = await getDocs(queryData)
			querySnapshot.forEach(snapshot => {
				organizationsByUser.push(snapshot.data())
			})
			return { data: organizationsByUser, error: null }
		} catch (error) {
			return {
				data: [],
				error: {
					message: 'Error al obtener las organizaciones del usuario',
					type: 'request',
				},
			}
		}
	} */
}
