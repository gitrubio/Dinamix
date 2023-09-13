import {
	IconHome,
	IconTemplate,
	IconDeviceGamepad2,
	IconUsers,
	IconSettings,
} from '@tabler/icons-react'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'

export const mainOptions = [
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
]