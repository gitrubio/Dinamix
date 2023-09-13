import React, { useState } from 'react'
import {
	Navbar,
	UnstyledButton,
	Group,
	Input,
} from '@mantine/core'
import {
	IconSearch,
	IconDownload,
	IconRecycle,
} from '@tabler/icons-react'
import { PropsNavBar } from '../../interfaces/Dashboard.interface'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import { useNavigate } from 'react-router-dom'
import Organizations from './components/Organizations'
import { mainOptions } from './utils'
import { useStyles } from './styles'


export default function NavDashboard(props: PropsNavBar) {
	const navitage = useNavigate()
	const { classes, cx } = useStyles()
	const [active, setActive] = useState(NAV_ITEMS.HOME)
	
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
		<Navbar  height={'100%'} width={{ sm: 350 }}  hiddenBreakpoint="sm"  hidden={!props.opened}> 
			<Navbar.Section>
				<Organizations {...props} />
			</Navbar.Section>
			<Navbar.Section sx={{ margin: 10 }}>
				<Input icon={<IconSearch />} placeholder='Buscar' />
			</Navbar.Section>
			<Navbar.Section grow>
				<Group className={classes.header} position='apart'></Group>
				{links}
			</Navbar.Section>

			<Navbar.Section grow className={classes.footer}>
				
				<UnstyledButton
					key={NAV_ITEMS.IMPORT}
					className={cx(classes.link, {[classes.linkActive]: NAV_ITEMS.IMPORT  === active,})}
					onClick={()=> changeView(LINKS_NAV.IMPORT,NAV_ITEMS.IMPORT)}
				>
					<IconDownload className={classes.linkIcon} stroke={1.5} />
					<span>Importar dinámicas</span>
				</UnstyledButton>
				
				<UnstyledButton
					key={NAV_ITEMS.BIN}
					className={cx(classes.link, {[classes.linkActive]: NAV_ITEMS.BIN  === active,
					})}
					onClick={()=> changeView(LINKS_NAV.BIN,NAV_ITEMS.BIN)}
				>
					<IconRecycle className={classes.linkIcon} stroke={1.5} />
					<span>Papelera</span>
				</UnstyledButton>

			</Navbar.Section>
		</Navbar>
	)
}
