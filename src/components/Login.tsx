import React from 'react'

import { login } from '../store/auth/authSlice'
import { useAppDispatch } from '../store/store'
export default function Login() {
	const dispatch = useAppDispatch()
	const loginuser = () => {
		dispatch(
			login({
				uid: '234234234',
				displayName: 'carlitos',
				email: 'carss@gmail.com',
			})
		)
	}

	return (
		<>
			<div> momento Login</div>
			<button onClick={loginuser}>LOGIN</button>
		</>
	)
}
