import { useAppSelector } from '../store/store'

export const useStatus = () => {
	const { status, email, displayName } = useAppSelector(store => store.auth)
	return {
		status,
		email,
		displayName,
	}
}
