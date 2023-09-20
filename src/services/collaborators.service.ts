import { CollaboratorCollectionRef } from '../firebase/providers'
import { ResponseService } from '../interfaces/api.interface'
import { Collaborator } from '../interfaces/collaborators.interface';
import {
	addDoc,
	getDocs,
	query,
	updateDoc,
	where,
	doc
} from 'firebase/firestore'

export class CollaboratorsService {
	constructor(
		private readonly CollaboratorCollection = CollaboratorCollectionRef
	) {}
	async create(Collaborator: Collaborator): Promise<ResponseService<string| null>> {
		try {
			const querySnapshot = await addDoc(
				this.CollaboratorCollection,
				Collaborator
			)
			const newEventId = querySnapshot.id
			return { data: newEventId, error: null }
		} catch (error) {
			return { data: null, error: null }
		}
	}
	async update(collaboratorId: string, collaborator : Partial<Collaborator>): Promise<ResponseService<boolean>> {
		try {
			const collaboratorRef = doc(this.CollaboratorCollection, collaboratorId)
			const querySnapshot = await updateDoc(collaboratorRef,collaborator)
			return { data: true, error: null }
		} catch (error) {
			return { data: false, error: null }
		}
	}
	async getOrganizationsByCollaborator(
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
	}
	async getCollaboratorsByOrganizationId(
		orgID: string
	): Promise<ResponseService<Collaborator[]>> {
		try {
			const organizationsByUser: Collaborator[] = []
			const queryData = query(
				this.CollaboratorCollection,
				where('Organization.id', '==', orgID)
			)
			const querySnapshot = await getDocs(queryData)
			querySnapshot.forEach(snapshot => {
				organizationsByUser.push({...snapshot.data(), id : snapshot.id})
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
	}
}
