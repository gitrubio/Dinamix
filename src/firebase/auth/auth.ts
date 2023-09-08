import * as FirebaseAuthService from 'firebase/auth'
import { FirebaseAuth } from '../firabase'


export const loginWithEmailPassword = async (
	email: string,
	password: string
) => {
	try {
		const response = await FirebaseAuthService.signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		)
		return { data: response.user, error: null }
	} catch (error: any) {
		console.log('error', error);
		return { data: null, error: 'Error al iniciar sesion' }
	}
}
export const logoutSession = async ()  => {
	return await FirebaseAuth.signOut();
}
export const RegissterUserWithEmailPassword = async (
	email: string,
	password: string
) => {
	try {
		const response = await FirebaseAuthService.createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		)
		return { data: response.user , error: null }
	} catch (error: any) {
		console.log('error', error);
		return { data: null, error: 'Error al iniciar sesion' }
	}
}
