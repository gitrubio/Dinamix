import React from 'react'
import { Button } from '@mantine/core'
import { useAppDispatch } from '../../store/store'
import { authLogOut } from '../../store/auth'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
	const dispatch = useAppDispatch()
	const navitage = useNavigate()
	const logoutSesion = () => {
		dispatch(authLogOut()).then(() => {
			navitage('/login')
		})
	}
	return <Button onClick={logoutSesion}>SALIR</Button>
}
