import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell, Burger, Header, LoadingOverlay, MediaQuery } from '@mantine/core'
import NavDashboard from '../NavBard'
import { useStatus } from '../../hooks/useStatus'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import SelectOrganization from '../organizations'
import useAuth from '../../hooks/useAuth'
import { useOrganizations } from '../../hooks/useOrganizations'

export default function Dashboard() {
	const currentOrganization = useGetCurrentOrg()
	const [opened, setOpened] = useState(false)
	const {organizations,status,getOrganizations} = useOrganizations()
	const { logout } = useAuth()
	const user = useStatus()


	if(status === 'loading' && user.uid !== null){ 
		getOrganizations(user.uid)
		return (<LoadingOverlay visible overlayBlur={2} />)
	}
	if (currentOrganization.id === null) return <SelectOrganization data={organizations}/>
	return (
		<AppShell
			padding='md'
			navbar={
				<NavDashboard
					opened={opened}
					userInfo={user}
					currentOrg={currentOrganization}
					organizations={organizations}
					logOut={logout}
				/>
			}
			header={
				<Header height={{ base: 50, md: 70 }} p='md'>
					<div
						style={{ display: 'flex', alignItems: 'center', height: '100%' }}
					>
						<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened(o => !o)}
								size='sm'
								color={'gray'}
								mr='xl'
							/>
						</MediaQuery>
						{/* 
						<Text>Application header</Text> */}
					</div>
				</Header>
			}
			styles={theme => ({
				main: {
					backgroundColor: theme.colors.gray[0],
				},
			})}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
		>
			<Routes>
				<Route key={NAV_ITEMS.HOME} path='/' element={<></>} />
				<Route
					key={NAV_ITEMS.DYNAMICS}
					path={LINKS_NAV.DYNAMICS}
					element={<p>dinamicas</p>}
				/>
			</Routes>
		</AppShell>
	)
}
