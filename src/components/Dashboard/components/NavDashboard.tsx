import React, { useState } from 'react'
import {
	Navbar,
	UnstyledButton,
	Group,
	Text,
	Box,
	useMantineTheme,
	rem,
	Grid,
	Input,
} from '@mantine/core'
import {
	IconChevronRight,
	IconBuildingSkyscraper,
	IconHome,
	IconTemplate,
	IconDeviceGamepad2,
	IconUsers,
	IconSettings,
	IconSearch,
	IconDownload,
	IconRecycle
} from '@tabler/icons-react'
import { PropsNavBar } from '../../../interfaces/Dashboard.interface'
import { NAV_ITEMS } from '../../../constants'
import { useNavigate } from 'react-router-dom'

const data = [
	{ icon: <IconHome size={'22px'} />, label: 'Inicio', key: NAV_ITEMS.HOME, link: '/dashboard' },
	{
		icon: <IconDeviceGamepad2 size={'22px'} />,
		label: 'Dinámicas',
		key: NAV_ITEMS.DYNAMICS,
		link: 'dinamicas',
	},
	{
		icon: <IconUsers size={'22px'} />,
		label: 'Colaboradores',
		key: NAV_ITEMS.COLLABORATORS,
		link: 'colaboradores',
	},
	{
		icon: <IconTemplate size={'22px'} />,
		label: 'Plantillas',
		key: NAV_ITEMS.TEMPLATE,
		link: 'plantillas',
	},
	{
		icon: <IconSettings size={'22px'} />,
		label: 'Configuración',
		key: NAV_ITEMS.SETTINGS,
		link: 'configuracion',
	},
]
export default function NavDashboard({ user }: PropsNavBar) {
	const [section, setSection] = useState(NAV_ITEMS.HOME)
	const navitage = useNavigate()
	const theme = useMantineTheme()
	return (
		<Navbar fixed={false} width={{ base: 350 }} height={'100%'} p='xs'>
			<Navbar.Section>
				<Box
					sx={{
						paddingTop: theme.spacing.sm,
						borderTop: `${rem(1)} solid ${
							theme.colorScheme === 'dark'
								? theme.colors.dark[4]
								: theme.colors.gray[2]
						}`,
					}}
				>
					<UnstyledButton
						sx={{
							display: 'block',
							width: '100%',
							padding: theme.spacing.xs,
							borderRadius: theme.radius.sm,
							color:
								theme.colorScheme === 'dark'
									? theme.colors.dark[0]
									: theme.black,

							'&:hover': {
								backgroundColor:
									theme.colorScheme === 'dark'
										? theme.colors.dark[6]
										: theme.colors.gray[0],
							},
						}}
					>
						<Group>
							<IconBuildingSkyscraper
								size={48}
								style={{ background: '#d1d1d1' }}
							/>
							<Box sx={{ flex: 1 }}>
								<Text size='sm' weight={500}>
									Organización
								</Text>
								<Text color='dimmed' size='xs'>
									{user.email}
								</Text>
							</Box>

							<IconChevronRight size={rem(18)} />
						</Group>
					</UnstyledButton>
				</Box>
			</Navbar.Section>
			<Navbar.Section style={{ marginBlock: 20 }}>
				<Input icon={<IconSearch />} placeholder='Buscar' />
			</Navbar.Section>
			<Navbar.Section grow mt='md'>
				<Grid>
					{data.map(item => (
						<Grid.Col key={`col-${item.key}`}>
							<UnstyledButton
								onClick={()=> navitage(item.link)}
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
					<Grid.Col key={`col-import`}>
						<UnstyledButton
							key={NAV_ITEMS.IMPORT}
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
								<IconDownload />
								<Text size='lg'>{'Importar dinámicas'}</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col key={`col-bin`}>
						<UnstyledButton
							key={NAV_ITEMS.BIN}
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
								<IconRecycle />
								<Text size='lg'>{'Papelera'}</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Navbar.Section>
		</Navbar>
	)
}
