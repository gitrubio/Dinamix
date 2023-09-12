import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AppShell} from '@mantine/core'
import NavDashboard from './components/NavDashboard'
import { useStatus } from '../../hooks/useStatus'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import HeaderDashboard from './components/HeaderDashboard'
import { MIN_ORGANIZATION_LENGTH } from '../../constants/organizations'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import SelectOrganization from '../organizations'

export default function Dashboard(props: any) {
	const navigate = useNavigate()
	const user = useStatus()
	const {id : organizationId}  = useGetCurrentOrg()

	if (organizationId === null) {
		return <SelectOrganization/>
	}
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
