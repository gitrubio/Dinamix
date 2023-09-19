import {  Box, NavLink } from '@mantine/core'
import React from 'react'
import { mainOptions } from '../utils/utils'
import { navBarStyles } from '../styles/navbar.styles'
import { PropsNavBarModal, sectionType } from '../../../interfaces/GlobalModal.interface'


export default function NavBar({section,changeState}: PropsNavBarModal) {
      const {classes} = navBarStyles()
    const options = mainOptions.map(item => (
		<NavLink
      className={classes.link}
      key={item.label}
      active={item.key === section}
      label={item.label}
      icon={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => changeState(item.link as sectionType)}
        />
	))
  return (
    <Box>
        {options}
    </Box>
  )
}
