import { notifications } from '@mantine/notifications'
import { loginWithEmailPassword, logoutSession } from '../../firebase/auth/auth';
import { IUser } from '../../interfaces/auth.interfaces'
import { checkingCredentials, login, logout } from './authSlice'


export const authLogin = (user: IUser) => {
	return async (dispatch: any, getState: any) => {
		dispatch(checkingCredentials())
		const { data } = await loginWithEmailPassword(user.email, user.password)
		if (data) {
            notifications.show({
                id: 'auth-login',
                title: 'Bienvenido !!',
                message: 'Has iniciado sesion correctamente 😎',
                color: 'green',
              })
			dispatch(
				login({
					uid: data?.uid,
					displayName: data?.displayName,
					email: data?.email,
				})
			)
            return true
		} else {
            dispatch(logout({errorMessage:  'Error al iniciar sesion'}))
			notifications.show({
                id: 'auth-error',
                title: 'Error al iniciar sesion',
                message: 'verifica tus credenciales 🤥',
                color: 'red',
              })
              return false
		}
	}
}
export const authLogOut = () => {
	return async (dispatch: any, getState: any) => {
		dispatch(checkingCredentials())
		await logoutSession()
        dispatch(logout({errorMessage:  'finalizando sesion'}))
        return true
    }
}
