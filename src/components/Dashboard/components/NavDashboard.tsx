import React from 'react'
import {
	Navbar,
	UnstyledButton,
	Group,
	Text,
	Grid,
	Input,
} from '@mantine/core'
import {
	IconHome,
	IconTemplate,
	IconDeviceGamepad2,
	IconUsers,
	IconSettings,
	IconSearch,
	IconDownload,
	IconRecycle,
} from '@tabler/icons-react'
import { PropsNavBar } from '../../../interfaces/Dashboard.interface'
import { LINKS_NAV, NAV_ITEMS } from '../../../constants'
import { useNavigate } from 'react-router-dom'
import Organizations from './Organizations'

const mainOptions = [
	{
		icon: <IconHome size={'22px'} />,
		label: 'Inicio',
		key: NAV_ITEMS.HOME,
		link: LINKS_NAV.HOME,
	},
	{
		icon: <IconDeviceGamepad2 size={'22px'} />,
		label: 'Dinámicas',
		key: NAV_ITEMS.DYNAMICS,
		link: LINKS_NAV.DYNAMICS,
	},
	{
		icon: <IconUsers size={'22px'} />,
		label: 'Colaboradores',
		key: NAV_ITEMS.COLLABORATORS,
		link: LINKS_NAV.COLLABORATORS,
	},
	{
		icon: <IconTemplate size={'22px'} />,
		label: 'Plantillas',
		key: NAV_ITEMS.TEMPLATE,
		link: LINKS_NAV.TEMPLATE,
	},
	{
		icon: <IconSettings size={'22px'} />,
		label: 'Configuración',
		key: NAV_ITEMS.SETTINGS,
		link: LINKS_NAV.SETTINGS,
	},
]
const secondayOptions = [
	{
		icon: <IconDownload size={'22px'} />,
		label: 'Importar dinámicas',
		key: NAV_ITEMS.IMPORT,
		link: LINKS_NAV.IMPORT,
	},
	{
		icon: <IconRecycle size={'22px'} />,
		label: 'Papelera',
		key: NAV_ITEMS.BIN,
		link: LINKS_NAV.BIN,
	},
]

export default function NavDashboard({ user }: PropsNavBar) {
	const navitage = useNavigate()

	return (
		<Navbar fixed={false} width={{ base: 350 }} height={'100%'} p='xs'>
			<Navbar.Section>
				<Organizations user={user} />
			</Navbar.Section>
			<Navbar.Section style={{ marginBlock: 20 }}>
				<Input icon={<IconSearch />} placeholder='Buscar' />
			</Navbar.Section>
			<Navbar.Section grow mt='md'>
				<Grid>
					{mainOptions.map(item => (
						<Grid.Col key={`col-${item.key}`}>
							<UnstyledButton
								onClick={() => navitage(item.link)}
								key={item.key}
								sx={theme => ({
									display: 'flex',
									justifyContent: 'start',
									width: '100%',
									padding: theme.spacing.xs,
									borderRadius: theme.radius.md,
									color: theme.black,
									transition: 'all 100ms ease',
									'&:hover': {
										backgroundColor: theme.colors.gray[1],
										transform: 'translateX(5px)',
									},
								})}
							>
								<Group align='center'>
									{item.icon}
									<Text size='lg'>{item.label}</Text>
								</Group>
							</UnstyledButton>
						</Grid.Col>
					))}
				</Grid>
			</Navbar.Section>
			<Navbar.Section grow mt='md'>
				<Grid>
					{secondayOptions.map(item => (
						<Grid.Col key={`col-${item.key}`}>
							<UnstyledButton
								onClick={() => navitage(item.link)}
								key={item.key}
								sx={theme => ({
									display: 'flex',
									justifyContent: 'start',
									width: '100%',
									padding: theme.spacing.xs,
									borderRadius: theme.radius.md,
									color: theme.black,
									transition: 'all 100ms ease',
									'&:hover': {
										backgroundColor: theme.colors.gray[1],
										transform: 'translateX(5px)',
									},
								})}
							>
								<Group align='center'>
									{item.icon}
									<Text size='lg'>{item.label}</Text>
								</Group>
							</UnstyledButton>
						</Grid.Col>
					))}
				</Grid>
			</Navbar.Section>
		</Navbar>
	)
}
