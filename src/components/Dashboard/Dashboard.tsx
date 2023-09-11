import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell} from '@mantine/core'
import HeaderDashboard from './components/HeaderDashboard'
import NavDashboard from './components/NavDashboard'
import { useStatus } from '../../hooks/useStatus'

export default function Dashboard(props: any) {
	
	
	
	const user = useStatus()
	return (
		<AppShell
			padding='md'
			navbar={
				<NavDashboard user={user}/>
			}
			header={
				<HeaderDashboard/>
			}
			styles={theme => ({
				main: {
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
				},
			})}
		>
			<Routes >
				<Route key={'home'} path='/' element={<p>inicio</p>} />
				<Route key={'dinamicas'} path='dinamicas' element={<p>dinamicas</p>} />
			</Routes>
		</AppShell>
	)
}
