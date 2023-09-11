import { useAppSelector } from '../store/store'

export const useStatus = () => {
	const userInfo = useAppSelector(store => store.auth)
	return {
		...userInfo
	}
}
