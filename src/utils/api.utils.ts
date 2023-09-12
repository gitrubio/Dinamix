import { IUser } from '../interfaces/auth.interfaces'
import { Collaborator } from '../interfaces/collaborators.interface'
import { CollaboratorServices, OrganizationServices } from '../services'

export const createOrganizationAndCollaborator = async (
	user: IUser,
	userID: string
): Promise<Collaborator> => {
	const { data } = await OrganizationServices.create({
		name: user.email,
		avatar: 'none',
	})
	if (data) {
		const response = await CollaboratorServices.create({
			Organization: { id: data.id, name: user.email, avatar: 'none' },
			rol: 'owner',
			userId: userID,
		})
		if (response.data) {
			return {
				Organization: { id: data.id, name: user.email, avatar: 'none' },
				rol: 'owner',
				userId: userID,
			}
		} else {
			throw new Error('fallo al crear el colaborador')
		}
	} else {
		throw new Error('fallo al crear organización')
	}
}
