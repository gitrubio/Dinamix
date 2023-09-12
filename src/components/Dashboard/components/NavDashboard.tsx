import React, { useState } from 'react'
import {
	Navbar,
	UnstyledButton,
	Group,
	Input,
	rem,
	createStyles,
	getStylesRef,
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
	IconLogout,
} from '@tabler/icons-react'
import { PropsNavBar } from '../../../interfaces/Dashboard.interface'
import { LINKS_NAV, NAV_ITEMS } from '../../../constants'
import { useNavigate } from 'react-router-dom'
import Organizations from './Organizations'
import { useAppDispatch } from '../../../store/store'
import { authLogOut } from '../../../store/auth'

const useStyles = createStyles(theme => ({
	header: {
		paddingBottom: theme.spacing.md,
		marginBottom: `calc(${theme.spacing.md} * 1.5)`,
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
		}`,
	},

	footer: {
		paddingTop: theme.spacing.md,
		marginTop: theme.spacing.md,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
		}`,
	},

	link: {
		...theme.fn.focusStyles(),
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		fontSize: theme.fontSizes.sm,
		width: '100%',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[1]
				: theme.colors.gray[7],
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		fontWeight: 500,
		transition: 'all 100ms ease',
		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			[`& .${getStylesRef('icon')}`]: {
				color: theme.colorScheme === 'dark' ? theme.white : theme.black,
			},
		},
	},

	linkIcon: {
		ref: getStylesRef('icon'),
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[2]
				: theme.colors.gray[6],
		marginRight: theme.spacing.sm,
	},

	linkActive: {
		transform: 'translateX(10px)',
		'&, &:hover': {
			backgroundColor: theme.fn.variant({
				variant: 'light',
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
				.color,
			[`& .${getStylesRef('icon')}`]: {
				color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
					.color,
			},
		},
	},
}))

const mainOptions = [
	{
		icon: IconHome,
		label: 'Inicio',
		key: NAV_ITEMS.HOME,
		link: LINKS_NAV.HOME,
	},
	{
		icon: IconDeviceGamepad2,
		label: 'Dinámicas',
		key: NAV_ITEMS.DYNAMICS,
		link: LINKS_NAV.DYNAMICS,
	},
	{
		icon: IconUsers,
		label: 'Colaboradores',
		key: NAV_ITEMS.COLLABORATORS,
		link: LINKS_NAV.COLLABORATORS,
	},
	{
		icon: IconTemplate,
		label: 'Plantillas',
		key: NAV_ITEMS.TEMPLATE,
		link: LINKS_NAV.TEMPLATE,
	},
	{
		icon: IconSettings,
		label: 'Configuración',
		key: NAV_ITEMS.SETTINGS,
		link: LINKS_NAV.SETTINGS,
	},
	{
		icon: IconDownload,
		label: 'Importar dinámicas',
		key: NAV_ITEMS.IMPORT,
		link: LINKS_NAV.IMPORT,
	}
]

export default function NavDashboard(props: PropsNavBar) {
	const navitage = useNavigate()
	const dispatch = useAppDispatch()
	const { classes, cx } = useStyles()
	const [active, setActive] = useState(NAV_ITEMS.HOME)

	const logoutSesion = () => {
		dispatch(authLogOut()).then(() => {
			navitage('/login')
		})
    }
	const changeView = (link: string,key: string) => {
		setActive(key)
		navitage(link)
	}

	const links = mainOptions.map(item => (
		<UnstyledButton
			className={cx(classes.link, {
				[classes.linkActive]: item.key === active,
			})}
			onClick={() => changeView(item.link,item.key)}
			key={item.key}
		>
			<item.icon className={classes.linkIcon} stroke={1.5} />
			<span>{item.label}</span>
		</UnstyledButton>
	))

	return (
		<Navbar fixed={false} height={'100%'} width={{ sm: 350 }} p='md'>
			<Navbar.Section>
				<Organizations {...props} />
			</Navbar.Section>
			<Navbar.Section style={{ marginBlock: 20 }}>
				<Input icon={<IconSearch />} placeholder='Buscar' />
			</Navbar.Section>
			<Navbar.Section grow>
				<Group className={classes.header} position='apart'></Group>
				{links}
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				<UnstyledButton
					key={NAV_ITEMS.BIN}
					className={cx(classes.link, {
						[classes.linkActive]: NAV_ITEMS.BIN  === active,
					})}
					onClick={()=> changeView(LINKS_NAV.BIN,NAV_ITEMS.BIN)}
				>
					<IconRecycle className={classes.linkIcon} stroke={1.5} />
					<span>Papelera</span>
				</UnstyledButton>

				<UnstyledButton
					className={classes.link}
					onClick={logoutSesion}
				>
					<IconLogout className={classes.linkIcon} stroke={1.5} />
					<span>Salir</span>
				</UnstyledButton>
			</Navbar.Section>
		</Navbar>
	)
}
