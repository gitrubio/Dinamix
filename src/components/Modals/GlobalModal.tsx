import React, { useState } from 'react'
import { Modal, useMantineTheme, ModalProps, AppShell } from '@mantine/core'
import NavBar from './components/NavBar'
import Collaborators from '../Collaborators/index';
import { GlobalModalProps, sectionType } from '../../interfaces/GlobalModal.interface';


export default function GlobalModal({closed,state,changeState}: GlobalModalProps) {
	const theme = useMantineTheme()
	

		const componentSection : Record<sectionType, React.JSX.Element> = {
			profile :  <></>,
			bin : <></>,
			collaborators : <Collaborators/>,
			import : <></>,
			settings : <></>,
			templates : <></>,
		}

		return (
		<>
			<Modal
				opened={state.opened}
				onClose={closed}
				size={"90%"}
				overlayProps={{
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[9]
							: theme.colors.gray[2],
					opacity: 0.55,
					blur: 3,
				}}
			>
				<AppShell  navbar={<NavBar section={state.section} changeState={changeState}/>} layout='alt' h={"100%"}>
					{componentSection[state.section]}
				</AppShell>
			</Modal>
		</>
	)
}
