import React, { useState } from 'react'
import {
	Navbar,
	UnstyledButton,
	Group,
	ActionIcon,
	MediaQuery,
} from '@mantine/core'
import { mainOptions } from './utils/utils'
import { PropsNavBar } from '../../interfaces/Dashboard.interface'
import { useNavigate } from 'react-router-dom'
import Organizations from './components/Organizations'
import { NAV_ITEMS } from '../../constants'
import { useStyles } from './styles'
import { sectionType } from '../../interfaces/GlobalModal.interface'

export default function NavDashboard(props: PropsNavBar) {
	const navitage = useNavigate()
	const { classes, cx } = useStyles()
	const [active, setActive] = useState(NAV_ITEMS.HOME)

	const changeView = (link: string, key: string) => {
		setActive(key)
		navitage(link)
	}

	const options = mainOptions.map(item => (
		<MediaQuery
			smallerThan={'lg'}
			styles={{ justifyContent: props.opened ? 'start' : 'center' }}
			key={item.key}
		>
			<UnstyledButton
				className={cx(classes.link, {
					[classes.linkActive]: item.key === active,
				})}
				onClick={() => {
					if (item.modal) {
						props.openModal(item.link as sectionType)
					} else {
						changeView(item.link, item.key)
					}
				}}
			>
				<Group>
					<ActionIcon color={item.color} variant='light' size={''}>
						<item.icon size='1.25rem' stroke={1.5} />
					</ActionIcon>
					<MediaQuery
						smallerThan={'lg'}
						styles={{ display: props.opened ? 'flex' : 'none' }}
					>
						<span>{item.label}</span>
					</MediaQuery>
				</Group>
			</UnstyledButton>
		</MediaQuery>
	))
	const links = options.slice(0, options.length - 2)
	const others = options.slice(options.length - 2, options.length)

	return (
		<Navbar
			width={{ sm: 90, md: 90, lg: 320, xl: 350 }}
			hiddenBreakpoint='sm'
			hidden={!props.opened}
			p='md'
		>
			<Navbar.Section>
				<Organizations {...props} />
			</Navbar.Section>

			<Navbar.Section grow>
				<Group className={classes.header} position='apart'></Group>
				{links}
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>{others}</Navbar.Section>
		</Navbar>
	)
}
