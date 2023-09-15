import { CurrentOrganizationstate } from '../interfaces/organizations.interface'
import { changeCurrentOrg } from '../store/currentOrganizations'
import { getOrganizationsByUser } from '../store/organizations'
import { useAppSelector } from '../store/store'
import { useAppDispatch } from '../store/store'
export const useOrganizations = () => {
	const {data, status} = useAppSelector(store => store.organizations)
	const dispatch = useAppDispatch()

	const getOrganizations = (userId: string) => {
		dispatch(getOrganizationsByUser(userId))
	}
	const changeCurrent = (orga: CurrentOrganizationstate) => {
		dispatch(changeCurrentOrg(orga))
	}
	return {
		organizations : data,
        status,
		getOrganizations,
		changeCurrent
	}
}