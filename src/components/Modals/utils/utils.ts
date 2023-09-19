import {
	IconHome,
	IconTemplate,
	IconDeviceGamepad2,
	IconUsers,
	IconSettings,
	IconRecycle,
	IconDownload,
} from '@tabler/icons-react'
import { LINKS_NAV } from '../../../constants'

export const mainOptions = [
	{
		icon: IconHome,
		label: 'Mi perfil',
		key: "profile",
        link: "profile",
		color: 'blue'
	},
	{
		icon: IconDeviceGamepad2,
		label: 'Miembros',
		key: LINKS_NAV.COLLABORATORS,
        link: LINKS_NAV.COLLABORATORS,
		color: 'green'
	},
	{
		icon: IconTemplate,
		label: 'Plantillas',
		key: LINKS_NAV.TEMPLATE,
        link: LINKS_NAV.TEMPLATE,
		color: 'cyan'
	},
	{
		icon: IconSettings,
		label: 'Configuración',
		key: LINKS_NAV.SETTINGS,
        link: LINKS_NAV.SETTINGS,
		color: 'red'
	},
	{
		icon: IconDownload,
		label: 'Importar dinámicas',
		key: LINKS_NAV.IMPORT,
        link: LINKS_NAV.IMPORT,
		color: 'violet'
	},
]