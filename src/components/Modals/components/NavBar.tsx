import { ActionIcon, Group, MediaQuery, Navbar, UnstyledButton } from '@mantine/core'
import React from 'react'
import { mainOptions } from '../utils/utils'
import { navBarStyles } from '../styles/navbar.styles'
import { PropsNavBarModal, sectionType } from '../../../interfaces/GlobalModal.interface'
import cx from 'clsx';

export default function NavBar({section,changeState}: PropsNavBarModal) {
    const {classes} = navBarStyles()
    const options = mainOptions.map(item => (
		<UnstyledButton
        key={item.key}
        onClick={() => changeState(item.link as sectionType)}
        className={cx(classes.link, {
            [classes.linkActive]: item.link === section,
        })}
		>
			<Group>
				<ActionIcon color={item.color} variant='light' size={''}>
					<item.icon size='1.25rem' stroke={1.5} />
				</ActionIcon>
				
					<span>{item.label}</span>
				
			</Group>
		</UnstyledButton>
	))
  return (
    <Navbar
			width={{ base: 300}}
			p='xs'
		>
			<Navbar.Section >
				<Group className={classes.header} position='apart'></Group>
				{options}
			</Navbar.Section>
		</Navbar>
  )
}
