import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppShell, LoadingOverlay, Text, Box } from '@mantine/core';
import NavDashboard from '../NavBard'
import { useStatus } from '../../hooks/useStatus'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import SelectOrganization from '../organizations'
import useAuth from '../../hooks/useAuth'
import { useOrganizations } from '../../hooks/useOrganizations'
import HeaderDashboard from './components/HeaderDashboard'
import Home from '../home/index'
import { useDisclosure } from '@mantine/hooks';
import GlobalModal from '../Modals/GlobalModal';

export default function Dashboard() {
	const currentOrganization = useGetCurrentOrg()
	const [openTab, setOpened] = useState(false)
	const [opened, { open, close }] = useDisclosure(false);
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
					opened={openTab}
					open={open}
					userInfo={user}
					currentOrg={currentOrganization}
					organizations={organizations}
					logOut={logout}
				/>
			}
			header={
				<HeaderDashboard opened={openTab} onclick={() => setOpened(o => !o)}/>
			}
			styles={theme => ({
				main: {
					backgroundColor: theme.colors.gray[0],
				},
			})}
			navbarOffsetBreakpoint='sm'
			asideOffsetBreakpoint='sm'
		>	
			<GlobalModal title={'xd'} onClose={close} opened={opened}>
				<>xd</>
			</GlobalModal>
			<Routes>
				<Route key={NAV_ITEMS.HOME} path='/' element={<Home/>}/>
				<Route
					key={NAV_ITEMS.DYNAMICS}
					path={LINKS_NAV.DYNAMICS}
					element={<p>dinamicas</p>}
				/>
			</Routes>
		</AppShell>
	)
}
