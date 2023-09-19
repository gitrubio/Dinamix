import React from 'react'
import { Modal, useMantineTheme, Grid, Container } from '@mantine/core'
import NavLinks from './components/NavLinks'
import Collaborators from '../Collaborators/index'
import {
	GlobalModalProps,
	sectionType,
} from '../../interfaces/GlobalModal.interface'

export default function GlobalModal({
	closed,
	state,
	changeState,
}: GlobalModalProps) {
	const theme = useMantineTheme()

	const componentSection: Record<sectionType, React.JSX.Element> = {
		profile: <></>,
		bin: <></>,
		collaborators: <Collaborators />,
		import: <></>,
		settings: <></>,
		templates: <></>,
	}

	return (
		<>
			<Modal
				opened={state.opened}
				onClose={closed}
				size={'90%'}
				h={1200}
				overlayProps={{
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[9]
							: theme.colors.gray[2],
					opacity: 0.55,
					blur: 3,
				}}
			>
				<Grid columns={12} mih={500} gutter={'xs'}>
					<Grid.Col span={2}>
						<NavLinks section={state.section} changeState={changeState}></NavLinks>
					</Grid.Col>
					<Grid.Col span={10}>
						<Container>{componentSection[state.section]}</Container>
					</Grid.Col>
				</Grid>
			</Modal>
		</>
	)
}
