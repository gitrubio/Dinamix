import { changeOrganizations } from "."
import { CollaboratorServices } from "../../services"

export const getOrganizationsByUser = (userId: string)  => {
    return async (dispatch: any) => {
		const {data,error} = await CollaboratorServices.getOrganizationsByCollaborator(userId)
		dispatch(changeOrganizations(data))
		return true
	}
}