import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AppShell, Burger, Header, MediaQuery, Text } from '@mantine/core'
import NavDashboard from '../NavBard'
import { useStatus } from '../../hooks/useStatus'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import SelectOrganization from '../organizations'
import { authLogOut } from '../../store/auth'
import { useAppDispatch } from '../../store/store'
import { DndListHandle } from '../NavBard/components/DragableItem'

export default function Dashboard() {
	const user = useStatus()
	const currentOrganization = useGetCurrentOrg()
	const navitage = useNavigate()
	const dispatch = useAppDispatch()
	const [opened, setOpened] = useState(false)
	if (currentOrganization.id === null) {
		return <SelectOrganization />
	}
	const logoutSesion = () => {
		dispatch(authLogOut()).then(() => {
			navitage('/login')
		})
    }
	return (
		<AppShell
			padding='md'
			navbar={
				<NavDashboard
					opened={opened}
					userInfo={user}
					currentOrg={currentOrganization}
					organizations={user.organizations}
					logOut={logoutSesion}
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
