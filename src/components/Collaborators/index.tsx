import React from 'react'
import {
	Container,
	Text,
	Title,
	Loader,
	Button,
	Input,
	rem,
	createStyles,
} from '@mantine/core'
import { UsersStack } from './components/UsersStack'
import { Box, Group } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import useCollaborators from '../../hooks/useCollaborators'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
const useStyles = createStyles(theme => ({
	wrapper: {
		paddingTop: rem(30),
		paddingBottom: rem(40),
	},

	item: {
		display: 'flex',
	},

	itemIcon: {
		padding: theme.spacing.xs,
		marginRight: theme.spacing.md,
	},

	itemTitle: {
		marginBottom: `calc(${theme.spacing.xs} / 2)`,
	},

	supTitle: {
		textAlign: 'start',
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,
		letterSpacing: rem(0.5),
	},

	title: {
		textAlign: 'start',
		marginTop: theme.spacing.xs,
	},

	description: {
		textAlign: 'center',
		marginTop: theme.spacing.xs,
	},

	highlight: {
		backgroundColor: theme.fn.variant({
			variant: 'light',
			color: theme.primaryColor,
		}).background,
		padding: rem(5),
		paddingTop: 0,
		borderRadius: theme.radius.sm,
		display: 'inline-block',
		color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
	},
}))
export default function Collaborators() {
	const organization = useGetCurrentOrg()
	const {classes} = useStyles()
	const { collaborators, loading } = useCollaborators(organization.id)
	return (
		<Container size={'xl'} className={classes.wrapper}>
			<Title className={classes.title} order={3}>
				Colaboradores
			</Title>

			<Text color='dimmed' className={classes.supTitle}>
				Administre miembros aquí, todos los que tengan dominios de correo
				electrónico permitidos pueden unirse al espacio de trabajo
				automáticamente.{' '}
			</Text>
			<Box style={{ marginBlock: 10 }}>
				<Group position='apart'>
					<Input
						style={{ width: 300}}
						placeholder='Your email'
						rightSection={<IconSearch size='1rem' />}
					/>
					<Button variant='outline' color='blue'>
						Agregar miembro
					</Button>
				</Group>
			</Box>
			<Container size={'xl'} p={0}>
				{loading ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div>: <UsersStack  data={collaborators} />}
			</Container>
		</Container>
	)
}
