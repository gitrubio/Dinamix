import React, { useState } from 'react'
import {
	Avatar,
	Box,
	Group,
	NavLink,
	Paper,
	Text,
	Transition,
	UnstyledButton,
	rem,
	useMantineTheme,
	MediaQuery
} from '@mantine/core'
import {
	IconBuildingSkyscraper,
	IconChevronDown,
	IconChevronUp,
	IconDots,
	IconLogout,
	IconFilePlus,
} from '@tabler/icons-react'
import { useClickOutside } from '@mantine/hooks'
import { PropsNavBar } from '../../../interfaces/Dashboard.interface'
import { useAppDispatch } from '../../../store/store'
import { CurrentOrganizationstate } from '../../../interfaces/organizations.interface'
import { changeCurrentOrg } from '../../../store/currentOrganizations'
import { DndListHandle } from './DragableItem'
import { OrgStyles } from '../styles/OrganizationStyles';

const scaleY = {
	in: { opacity: 1,  positionY: 1 },
	out: { opacity: 0, },
	transitionProperty: 'transform, opacity',
}

export default function Organizations({
	currentOrg,
	organizations,
	userInfo,
	logOut,
}: PropsNavBar) {
	const theme = useMantineTheme()
	const clickOutsideRef = useClickOutside(() => setOpened(false))
	const [opened, setOpened] = useState(false)
	const dispatch = useAppDispatch()
	const {classes} =	OrgStyles()
	const change = (orga: CurrentOrganizationstate) => {
		dispatch(changeCurrentOrg(orga))
		setOpened(false)
	}
	const openModal = () => {
		setOpened(prev => !prev)
	}

	return (
		<div ref={clickOutsideRef} >
			<Box
				sx={{
					paddingTop: theme.spacing.sm,
					borderTop: `${rem(1)} solid ${theme.colors.gray[2]}`,
				}}
			>
				<UnstyledButton
					onClick={openModal}
					className={classes.organization}
				>
					<Group
						sx={{
							transition: 'all 100ms ease',
						}}
					>
						{currentOrg.avatar !== '' ? (
							<Avatar radius='sm' src={currentOrg.avatar} />
						) : (
							<IconBuildingSkyscraper
								size={40}
								style={{
									background: '#d1d1d1',
									padding: '5px',
									borderRadius: '50%',
								}}
							/>
						)}
						<MediaQuery smallerThan={'lg'} styles={{ display: 'none' }}>
						<Box sx={{ flex: 1 }}>
							<Text size='sm' weight={500}>
								{currentOrg.name}
							</Text>
							<Text color='dimmed' size='xs'>
								{userInfo.email}
							</Text>
						</Box>
				</MediaQuery>
						<Box
							className={classes.boxIcon}
						>
							<IconChevronUp size={rem(18)} />
							<IconChevronDown size={rem(18)} />
						</Box>
					
					</Group>
				</UnstyledButton>
			</Box>
			<Transition
				mounted={opened}
				transition={scaleY}
				duration={100}
				timingFunction='ease'
			>
				{(styles: any) => (
					<Paper
						sx={{
							minWidth: 350,
							width: '100%',
							marginLeft: 0,
							marginTop: 5,
							...styles,
							zIndex: 2,
							boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
							position: 'absolute',
							backgroundColor: theme.colors.gray[0],
						}}
					>
						<Box
							className={classes.info}
						>
							<Text size='sm' weight={500}>
								{userInfo.email}
							</Text>
							<UnstyledButton>
								<IconDots size={18} />
							</UnstyledButton>
						</Box>
						<Box >
							<DndListHandle onClick={change} data={organizations} currentId={currentOrg.id}/>
						</Box>
						<Box
							className={classes.linksBox}
						>
							<NavLink
								onClick={()=>{""}}
								label='Nueva organización'
								className={classes.link}
								icon={<IconFilePlus size='1rem' stroke={1.5} />}
							/>
							<NavLink
								onClick={logOut}
								label='Salir'
								className={classes.link}
								icon={<IconLogout size='1rem' stroke={1.5} />}
	
							/>
						</Box>
					</Paper>
				)}
			</Transition>
		</div>
	)
}
