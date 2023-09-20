import { notifications } from '@mantine/notifications'
import { loginWithEmailPassword, logoutSession } from '../../firebase/auth/auth'
import { IUser } from '../../interfaces/auth.interfaces'
import { checkingCredentials, login, logout } from './authSlice'
import { UserServices } from '../../services'

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
			const { data: userData } = await UserServices.getUserData(data.uid)
			console.log('userData', userData);
			
			welcomeMessage()
			dispatch(
				login({
					uid: data?.uid,
					displayName: userData.displayName,
					photoURL: userData.photoURL,
					email: data?.email,
				})
			)
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

/* export const organizationsUpdate = (userId: string) => {
	return async (dispatch: any) => {
		const { data, error } =
			await CollaboratorServices.getOrganizationsByCollaborator(userId)
		dispatch(uptadeOrganizations({ organizations: data }))
		if (error) {
			notifications.show({
				id: 'auth-error',
				title: 'Error al iniciar sesión',
				message: 'Error al obtener las organizaciones del usuario',
				color: 'red',
			})
		}
	}
} */
