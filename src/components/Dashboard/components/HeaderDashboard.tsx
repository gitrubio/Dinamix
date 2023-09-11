import React from 'react'
import { Button, Header } from '@mantine/core'
import { useAppDispatch } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { authLogOut } from '../../../store/auth'

export default function HeaderDashboard() {
    const dispatch = useAppDispatch()
    const navitage = useNavigate()
	const logoutSesion = () => {
		dispatch(authLogOut()).then(() => {
			navitage('/login')
		})
    }
    
	return (
		<Header
			height={60}
			p='xs'
			style={{ display: 'flex', justifyContent: 'end' }}
		>
			<Button onClick={logoutSesion}>Logout</Button>
		</Header>
	)
}
