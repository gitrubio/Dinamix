import {
	IconHome,
	IconTemplate,
	IconDeviceGamepad2,
	IconUsers,
	IconSettings,
	IconRecycle,
	IconDownload,
} from '@tabler/icons-react'
import { LINKS_NAV, NAV_ITEMS } from '../../../constants'

export const mainOptions = [
	{
		icon: IconHome,
		label: 'Inicio',
		key: NAV_ITEMS.HOME,
		link: LINKS_NAV.HOME,
		color: 'blue'
	},
	{
		icon: IconDeviceGamepad2,
		label: 'Dinámicas',
		key: NAV_ITEMS.DYNAMICS,
		link: LINKS_NAV.DYNAMICS,
		color: 'green'
	},
	{
		icon: IconUsers,
		label: 'Colaboradores',
		key: NAV_ITEMS.COLLABORATORS,
		link: LINKS_NAV.COLLABORATORS,
		color: 'orange'
	},
	{
		icon: IconTemplate,
		label: 'Plantillas',
		key: NAV_ITEMS.TEMPLATE,
		link: LINKS_NAV.TEMPLATE,
		color: 'cyan'
	},
	{
		icon: IconSettings,
		label: 'Configuración',
		key: NAV_ITEMS.SETTINGS,
		link: LINKS_NAV.SETTINGS,
		color: 'red'
	},
	{
		icon: IconDownload,
		label: 'Importar dinámicas',
		key: NAV_ITEMS.IMPORT,
		link: LINKS_NAV.IMPORT,
		color: 'violet'
	},
	{
		icon: IconRecycle,
		label: 'Papelera',
		key: NAV_ITEMS.BIN,
		link: LINKS_NAV.BIN,
		color: 'lime'
	},
]