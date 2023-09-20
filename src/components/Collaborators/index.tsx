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
	Modal,
	Grid,
	Alert,
} from '@mantine/core'
import { UsersStack } from './components/UsersStack'
import { Box, Group, TextInput } from '@mantine/core'
import { IconAlertCircle, IconAt, IconSearch } from '@tabler/icons-react'
import useCollaborators from '../../hooks/useCollaborators'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { useStatus } from '../../hooks/useStatus'
const useStyles = createStyles(theme => ({
	wrapper: {
		paddingTop: rem(5),
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
	const { uid } = useStatus()
	const organization = useGetCurrentOrg()
	const { classes } = useStyles()
	const [opened, { open, close }] = useDisclosure(false)
	const { collaborators, loading, updateCollaborator , loadRol} = useCollaborators(
		organization.id
	)
	const form = useForm({
		initialValues: {
			email: '',
		},

		validate: {
			email: value => (/^\S+@\S+$/.test(value) ? null : 'Email invalido'),
		},
	})
	return (
		<Container size={'xl'} className={classes.wrapper}>
			<Modal opened={opened} onClose={close} title='Agregar Colaborador'>
				<Grid justify='center'>
					<form onSubmit={form.onSubmit(values => close())}>
						<Alert radius={'mds'} color='blue' icon={<IconAlertCircle />}>
							Se enviara un correo para la confirmacion de la invitacion a
							colaborador
						</Alert>
						<Grid.Col>
							<TextInput
								label='Email del colaborador'
								icon={<IconAt style={{ width: rem(18), height: rem(18) }} />}
								{...form.getInputProps('email')}
							/>
						</Grid.Col>
						<Grid.Col>
							<Button type={'submit'} variant='outline' color='blue' fullWidth>
								Enviar
							</Button>
						</Grid.Col>
					</form>
				</Grid>
			</Modal>
			<Title className={classes.title} order={3}>
				Colaboradores
			</Title>

			<Text color='dimmed' className={classes.supTitle}>
				Administre miembros aquí, todos los que tengan dominios de correo
				electrónico permitidos pueden unirse al espacio de trabajo
				automáticamente.
			</Text>
			<Box style={{ marginBlock: 10 }}>
				<Group position='apart'>
					<Input
						style={{ width: 300 }}
						placeholder='Your email'
						rightSection={<IconSearch size='1rem' />}
					/>
					<Button variant='outline' color='blue' onClick={open}>
						Agregar miembro
					</Button>
				</Group>
			</Box>
			<Container size={'xl'} p={0}>
				{loading ? (
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Loader />
					</div>
				) : (
					<UsersStack userId={uid || ''} loadRol={loadRol} data={collaborators} onclick={updateCollaborator} />
				)}
			</Container>
		</Container>
	)
}
