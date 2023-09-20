import React, { Fragment, useState } from 'react'
import { AppShell, LoadingOverlay } from '@mantine/core'
import CreateOrSelectOrganization from '../organizations'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import { useOrganizations } from '../../hooks/useOrganizations'
import { Route, Routes } from 'react-router-dom'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import HeaderDashboard from './components/HeaderDashboard'
import { useStatus } from '../../hooks/useStatus'
import NavDashboard from '../NavBard'
import GlobalModal from '../Modals/GlobalModal'
import useAuth from '../../hooks/useAuth'
import Home from '../home/index'
import { sectionType, stateModal } from '../../interfaces/GlobalModal.interface'
import { initialStateGlobalModal } from '../../utils/modals.utils'

export default function Dashboard() {
	const currentOrganization = useGetCurrentOrg()
	const [openTab, setOpened] = useState(false)
	const [modalState, setModalState] = useState<stateModal>(
		initialStateGlobalModal
	)
	const { organizations, status, getOrganizations, changeCurrent } =
		useOrganizations()
	const { logout } = useAuth()
	const user = useStatus()

	const changeState = (section: sectionType) => {
		setModalState(prev => ({ opened: true, section }))
	}

	if (status === 'loading' && user.uid !== null) {
		getOrganizations(user.uid)
		return <LoadingOverlay visible overlayBlur={2} />
	}
	if (currentOrganization.id === null)
		return (
			<CreateOrSelectOrganization
				data={organizations}
				onClick={changeCurrent}
			/>
		)
	return (
		<Fragment>
			<GlobalModal
				key={'global-modal'}
				state={modalState}
				closed={() => {
					setModalState((prev)=>({...prev,opened:false}))
				}}
				changeState={changeState}
			/>
			<AppShell
				layout='alt'
				padding='md'
				navbar={
					<NavDashboard
						opened={openTab}
						openModal={changeState}
						userInfo={user}
						currentOrg={currentOrganization}
						organizations={organizations}
						logOut={logout}
					/>
				}
				header={
					<HeaderDashboard
						opened={openTab}
						onclick={() => setOpened(o => !o)}
					/>
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
					<Route key={NAV_ITEMS.HOME} path='/' element={<Home />} />
					<Route
						key={NAV_ITEMS.DYNAMICS}
						path={LINKS_NAV.DYNAMICS}
						element={<p>dinamicas</p>}
					/>
				</Routes>
			</AppShell>
		</Fragment>
	)
}
