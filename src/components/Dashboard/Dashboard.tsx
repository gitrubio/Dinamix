import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell} from '@mantine/core'
import NavDashboard from './components/NavDashboard'
import { useStatus } from '../../hooks/useStatus'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import HeaderDashboard from './components/HeaderDashboard'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import SelectOrganization from '../organizations'

export default function Dashboard() {
	const user = useStatus()
	const currentOrganization  = useGetCurrentOrg()

	if (currentOrganization.id === null) {
		return <SelectOrganization/>
	}
	return (
		<AppShell
			padding='md'
			navbar={
				<NavDashboard currentOrg={currentOrganization} organizations={user.organizations}/>
			}
			/* header={
				<HeaderDashboard/>
			} */
			styles={theme => ({
				main: {
					backgroundColor: theme.colors.gray[0],
				},
			})}
		>
			<Routes >
				<Route key={NAV_ITEMS.HOME} path='/' element={<p>inicio</p>} />
				<Route key={NAV_ITEMS.DYNAMICS} path={LINKS_NAV.DYNAMICS} element={<p>dinamicas</p>} />
			</Routes>
		</AppShell>
	)
}
