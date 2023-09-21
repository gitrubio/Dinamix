import React from 'react'
import { useAppDispatch } from '../store/store'
import { IUser } from '../interfaces/auth.interfaces'
import { authLogOut, authLogin } from '../store/auth'
import { useNavigate } from 'react-router-dom'

export default function useAuth() {
	const dispatch = useAppDispatch()
	const navitage = useNavigate()
	const login = (values: IUser) => {
		dispatch(authLogin(values))
	}

	const logout = () => {
		dispatch(authLogOut()).then(() => {
			navitage('/login')
		})
	}
	return {
		login,
		logout,
	}
}
