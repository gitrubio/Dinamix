import { notifications } from '@mantine/notifications'
import { loginWithEmailPassword, logoutSession } from '../../firebase/auth/auth'
import { IUser } from '../../interfaces/auth.interfaces'
import { checkingCredentials, login, logout } from './authSlice'
import { CollaboratorServices } from '../../services'
import { createOrganizationAndCollaborator } from '../../utils/api.utils'

const welcomeMessage = () => {
	notifications.show({
		id: 'auth-login',
		title: 'Bienvenido !!',
		message: 'Has iniciado sesión correctamente 😎',
		color: 'green',
	})
}
export const authLogin = (user: IUser) => {
	return async (dispatch: any) => {
		dispatch(checkingCredentials())
		const { data } = await loginWithEmailPassword(user.email, user.password)
		if (data) {
			const { data: Organizations } = await CollaboratorServices.getOrganizationsByCollaborator(data?.uid)
			if (Organizations.length === 0) {
				createOrganizationAndCollaborator(user, data?.uid)
					.then(response => {
						welcomeMessage()
						dispatch(
							login({
								uid: data?.uid,
								displayName: data?.displayName,
								email: data?.email,
								organizations: [{ ...response }],
							})
						)
					})
					.catch(() => {
						dispatch(logout({ errorMessage: 'Error al iniciar sesión' }))
						notifications.show({
							id: 'auth-error',
							title: 'Error al iniciar sesión',
							message: 'Parece que algo salio mal 😥',
							color: 'red',
						})
					})
			} else {
				welcomeMessage()
				dispatch(
					login({
						uid: data?.uid,
						displayName: data?.displayName,
						email: data?.email,
						organizations: Organizations,
					})
				)
			}
		} else {
			dispatch(logout({ errorMessage: 'Error al iniciar sesión' }))
			notifications.show({
				id: 'auth-error',
				title: 'Error al iniciar sesión',
				message: 'verifica tus credenciales 🤥',
				color: 'red',
			})
		}
	}
}
export const authLogOut = () => {
	return async (dispatch: any) => {
		dispatch(checkingCredentials())
		await logoutSession()
		dispatch(logout({ errorMessage: 'finalizando sesión' }))
		return true
	}
}
