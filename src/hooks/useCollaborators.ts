import React, { useState, useEffect } from 'react'
import { CollaboratorServices } from '../services'
import { Collaborator } from '../interfaces/collaborators.interface';
import { useAppDispatch, useAppSelector } from '../store/store'
import { changeOrganizations } from '../store/organizations'
import { changeCurrentOrg } from '../store/currentOrganizations'

export default function useCollaborators(orgId: string | null) {
	const [collaborators, setcollaborators] = useState<Collaborator[]>([])
	const {data : Organizations, status} = useAppSelector(store => store.organizations)
	const dispatch = useAppDispatch()
	const [loading, setLoading] = useState<boolean>(true)
	const [loadRol, setLoadRol] = useState<string>("")
	
	useEffect(() => {getCollaborators()}, [])

	const getCollaborators = async () => {
		const { data } =
			await CollaboratorServices.getCollaboratorsByOrganizationId(orgId || "")
		setcollaborators(data)
        setLoading(false)
	}
	const updateCollaborator = async (id: string,collaborator: Collaborator, myUser : boolean) => {
		console.log(id,collaborator);
		setLoadRol(id)
		const {data} = await CollaboratorServices.update(id,{rol: collaborator.rol})
		if(data){
			const newColla = collaborators.filter(collaborator => collaborator.id !== id)
			if(myUser){
				console.log("actualizando my usuario");
				
			const newStateOrganization = Organizations.filter(org => org.Organization.id !== collaborator.Organization.id)
			dispatch(changeOrganizations([...newStateOrganization,collaborator]))
			dispatch(changeCurrentOrg({...collaborator.Organization, rol: collaborator.rol}))
			}
			setcollaborators([...newColla,collaborator])
		}
		setLoadRol("")
	}
		
	return {
		collaborators,
		getCollaborators,
		updateCollaborator,
        loading,
		loadRol
	}
}
