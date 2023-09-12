import React, { useState } from 'react'
import {
	Box,
	Button,
	Group,
	Paper,
	ScrollArea,
	Text,
	Transition,
	UnstyledButton,
	rem,
	useMantineTheme,
} from '@mantine/core'
import {
	IconBuildingSkyscraper,
	IconChevronDown,
	IconChevronUp,
    IconPlus,
} from '@tabler/icons-react'
import { useClickOutside } from '@mantine/hooks'
import { PropsNavBar } from '../../../interfaces/Dashboard.interface'
import { useAppDispatch } from '../../../store/store'
import { Organizationstate } from '../../../interfaces/organizations.interface'
import { changeCurrentOrg } from '../../../store/organization'


const scaleY = {
	in: { opacity: 1, transform: 'scaleX(1)', positionX: 1 },
	out: { opacity: 0, transform: 'scaleX(0)' },
	common: { transformOrigin: 'left' },
	transitionProperty: 'transform, opacity',
}

export default function Organizations({ currentOrg,organizations }: PropsNavBar) {

	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)
	const clickOutsideRef = useClickOutside(() => setOpened(false))
    const dispatch = useAppDispatch()

    const change = (orga : Organizationstate) => {
      dispatch(changeCurrentOrg(orga))
      setOpened(false)
    }
	const openModal = () => {
		setOpened(prev => !prev)
	}

	return (
		<div ref={clickOutsideRef} style={{maxWidth: 350}}>
			<Box
				sx={{
					paddingTop: theme.spacing.sm,
					borderTop: `${rem(1)} solid ${theme.colors.gray[2]}`,
				}}
			>
				<UnstyledButton
					onClick={openModal}
					sx={{
						display: 'block',
						width: '100%',
						padding: theme.spacing.xs,
						borderRadius: theme.radius.sm,
						color: theme.black,
						'&:hover': {
							backgroundColor: theme.colors.gray[0],
						},
					}}
				>
					<Group
						sx={{
							transition: 'all 100ms ease',
							'&:hover': {
								transform: 'translateX(5px)',
							},
						}}
					>
						<IconBuildingSkyscraper
							size={48}
							style={{
								background: '#d1d1d1',
								padding: '5px',
								borderRadius: '50%',
							}}
						/>
						<Box sx={{ flex: 1 }}>
							<Text size='sm' weight={500}>
								{'Organización'}
							</Text>
							<Text color='dimmed' size='xs'>
								{currentOrg.name}
							</Text>
						</Box>

						<Box
							style={{
								display: 'flex',
								flexDirection: 'column',
								marginInline: 30,
							}}
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
				duration={200}
				timingFunction='ease'
			>
				{styles => (
					<Paper
						shadow='md'
						style={{
							width: '100%',
							marginLeft: '100%',
							...styles,
							zIndex: 100,
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							
						}}
					>
						<ScrollArea h={130} type='scroll'>
							{organizations.map((item: any) => (
								<UnstyledButton
                                    onClick={() => change({...item.Organization, rol: item.rol})}
									key={item.Organization.id}
									sx={{
										display: 'block',
										width: '100%',
										padding: theme.spacing.xs,
										'&:hover': {
											backgroundColor: theme.colors.gray[0],
										},
									}}
								>
									<Group>
										<IconBuildingSkyscraper
											size={48}
											style={{
												background: '#d1d1d1',
												padding: '5px',
												borderRadius: '50%',
											}}
										/>
										<Box sx={{ flex: 1 }}>
											<Text color='dimmed' size='sm' weight={500}>
												{item.Organization.name}
											</Text>
										</Box>
									</Group>
								</UnstyledButton>
							))}
						</ScrollArea>
						<Box style={{ width: '100%', padding: 5}}>
							<Button
                            style={{width: '100%'}}
								variant='outline'
								color='dark'
								radius='md'
								size='md'
								uppercase
							>
								<IconPlus/>
							</Button>
						</Box>
					</Paper>
				)}
			</Transition>
		</div>
	)
}
