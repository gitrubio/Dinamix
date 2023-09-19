import React, { useState, useEffect } from 'react'
import { CollaboratorServices } from '../services'
import { Collaborator } from '../interfaces/collaborators.interface'

export default function useCollaborators(orgId: string | null) {
	const [collaborators, setcollaborators] = useState<Collaborator[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {getCollaborators()}, [])

	const getCollaborators = async () => {
		const { data } =
			await CollaboratorServices.getCollaboratorsByOrganizationId(orgId || "")
            console.log(data);
		setcollaborators(data)
        setLoading(false)
	}

	return {
		collaborators,
		getCollaborators,
        loading
	}
}
