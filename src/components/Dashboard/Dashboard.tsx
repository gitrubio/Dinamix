import React, { useState } from 'react'
import { AppShell, LoadingOverlay } from '@mantine/core';
import CreateOrSelectOrganization from '../organizations';
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import { useOrganizations } from '../../hooks/useOrganizations'
import { useDisclosure } from '@mantine/hooks';
import { Route, Routes } from 'react-router-dom'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import HeaderDashboard from './components/HeaderDashboard'
import { useStatus } from '../../hooks/useStatus'
import NavDashboard from '../NavBard'
import GlobalModal from '../Modals/GlobalModal';
import useAuth from '../../hooks/useAuth'
import Home from '../home/index'
import Collaborators from '../Collaborators';

export default function Dashboard() {
	const currentOrganization = useGetCurrentOrg()
	const [openTab, setOpened] = useState(false)
	const [opened, { open, close }] = useDisclosure(false);
	const {organizations,status,getOrganizations,changeCurrent} = useOrganizations()
	const { logout } = useAuth()
	const user = useStatus()


	if(status === 'loading' && user.uid !== null){ 
		getOrganizations(user.uid)
		return (<LoadingOverlay visible overlayBlur={2} />)
	}
	if (currentOrganization.id === null) return <CreateOrSelectOrganization data={organizations} onClick={changeCurrent}/>
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
			<GlobalModal onClose={close} opened={opened} size={'xl'}>
				<CreateOrSelectOrganization edit data={organizations} currentId={currentOrganization.id} onClick={(data)=> {''}}/>
			</GlobalModal>
			<Routes>
				<Route key={NAV_ITEMS.HOME} path='/' element={<Home/>}/>
				<Route
					key={NAV_ITEMS.DYNAMICS}
					path={LINKS_NAV.DYNAMICS}
					element={<p>dinamicas</p>}
				/>
				<Route
					key={NAV_ITEMS.COLLABORATORS}
					path={LINKS_NAV.COLLABORATORS}
					element={<Collaborators/>}
				/>
			</Routes>
		</AppShell>
	)
}
