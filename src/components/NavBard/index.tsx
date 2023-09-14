import React, { useState } from 'react'
import {
	Navbar,
	UnstyledButton,
	Group,
	Input,
	TextInput,
	Code,
	ScrollArea,
	ActionIcon,
	MediaQuery,
} from '@mantine/core'
import { IconSearch, IconDownload, IconRecycle } from '@tabler/icons-react'
import { PropsNavBar } from '../../interfaces/Dashboard.interface'
import { LINKS_NAV, NAV_ITEMS } from '../../constants'
import { useNavigate } from 'react-router-dom'
import Organizations from './components/Organizations'
import { mainOptions, othersOptions } from './utils'
import { useStyles } from './styles'
import { useMantineTheme } from '@mantine/core'

export default function NavDashboard(props: PropsNavBar) {
	const navitage = useNavigate()
	const { classes, cx } = useStyles()
	const [active, setActive] = useState(NAV_ITEMS.HOME)

	const changeView = (link: string, key: string) => {
		setActive(key)
		navitage(link)
	}

	const links = mainOptions.map(item => (
		<MediaQuery smallerThan={'lg'} styles={{ justifyContent: 'center' }}>
			<UnstyledButton
				className={cx(classes.link, {
					[classes.linkActive]: item.key === active,
				})}
				onClick={() => changeView(item.link, item.key)}
				key={item.key}
			>
				<Group>
					<ActionIcon color={item.color} variant='light' size={''}>
						<item.icon size='1.25rem' stroke={1.5} />
					</ActionIcon>
					<MediaQuery smallerThan={'lg'} styles={{ display: 'none' }}>
						<span>{item.label}</span>
					</MediaQuery>
				</Group>
			</UnstyledButton>
		</MediaQuery>
	))
	const others = othersOptions.map(item => (
		<MediaQuery smallerThan={'lg'} styles={{ justifyContent: 'center' }}>
			<UnstyledButton
				className={cx(classes.link, {
					[classes.linkActive]: item.key === active,
				})}
				onClick={() => changeView(item.link, item.key)}
				key={item.key}
			>
				<Group>
					<ActionIcon color={item.color} variant='light' size={''}>
						<item.icon size='1.25rem' stroke={1.5} />
					</ActionIcon>
					<MediaQuery smallerThan={'lg'} styles={{ display: 'none' }}>
						<span>{item.label}</span>
					</MediaQuery>
				</Group>
			</UnstyledButton>
		</MediaQuery>
	))

	return (
		<Navbar
			width={{ sm: 100, md: 100, lg: 340, xl: 350 }}
			hiddenBreakpoint='sm'
			hidden={!props.opened}
			p='md'
		>
			<Navbar.Section>
				<Organizations {...props} />
			</Navbar.Section>
			{/* <Navbar.Section sx={{ margin: 10 }}>
				<TextInput
					placeholder='Buscar'
					size='xs'
					icon={<IconSearch size='0.8rem' stroke={1.5} />}
					rightSectionWidth={70}
					rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
					styles={{ rightSection: { pointerEvents: 'none' } }}
					mb='sm'
				/>
			</Navbar.Section> */}
			<Navbar.Section grow>
				<Group className={classes.header} position='apart'></Group>
				{links}
			</Navbar.Section>

			<Navbar.Section className={classes.footer}>
				{others}
			</Navbar.Section>
		</Navbar>
	)
}
