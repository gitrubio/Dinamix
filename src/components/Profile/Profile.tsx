import React from 'react'
import {
	Box,
	Button,
	Container,
	Divider,
	Group,
	Modal,
	PasswordInput,
	Text,
	TextInput,
	rem,
	useMantineTheme,
	Grid,
	Alert,
} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import {
	IconUser,
	IconUpload,
	IconX,
	IconLink,
	IconEdit,
	IconAlertCircle,
	IconLock,
	IconDeviceFloppy,
} from '@tabler/icons-react'
import { useStatus } from '../../hooks/useStatus'
import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { Avatar } from '@mantine/core'

export default function Profile() {
	const [opened, { open, close }] = useDisclosure(false)
	const theme = useMantineTheme()
	const { displayName, email, photoURL } = useStatus()
	const form = useForm({
		initialValues: {
			password: '',
			confirmPassword: '',
		},

		validate: {
			password: value => (value.length > 5 ? null : 'Invalid password'),
			confirmPassword: value => (value.length > 5 ? null : 'Invalid password'),
		},
	})

	return (
		<Container size={'lg'}>
			<Modal opened={opened} onClose={close} title='Cambiar contraseña'>
				<Grid>
					<form onSubmit={form.onSubmit(values => console.log(values))}>
						<Alert radius={'mds'} color='yellow' icon={<IconAlertCircle />}>
							Esta por cambiar la contraseña de su cuenta de forma permanente
						</Alert>
						<Grid.Col>
							<PasswordInput
								label='Nueva contraseña'
								icon={<IconLock style={{ width: rem(18), height: rem(18) }} />}
								{...form.getInputProps('password')}
							/>
						</Grid.Col>
						<Grid.Col>
							<PasswordInput
								label='Confirmar contraseña'
								icon={<IconLock style={{ width: rem(18), height: rem(18) }} />}
								{...form.getInputProps('confirmPassword')}
							/>
						</Grid.Col>
						<Grid.Col>
							<Button type={'submit'} variant='outline' color='blue' fullWidth>
								Guardar
							</Button>
						</Grid.Col>
					</form>
				</Grid>
			</Modal>
			<Group position={'left'}>
				<Box>
					<Dropzone
						sx={{
							padding: 0,
							borderRadius: '50%',
							width: 80,
							height: 80,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onDrop={files => console.log('accepted files', files)}
						onReject={files => console.log('rejected files', files)}
						maxSize={3 * 1024 ** 2}
						accept={IMAGE_MIME_TYPE}
					>
						<Group
							position='left'
							spacing='xl'
							style={{ minHeight: rem(220), pointerEvents: 'none' }}
						>
							<Dropzone.Accept>
								<IconUpload
									size='3rem'
									stroke={1.5}
									color={
										theme.colors[theme.primaryColor][
											theme.colorScheme === 'dark' ? 4 : 6
										]
									}
								/>
							</Dropzone.Accept>
							<Dropzone.Reject>
								<IconX
									size='3rem'
									stroke={1.5}
									color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
								/>
							</Dropzone.Reject>
							<Dropzone.Idle>
								{photoURL !== '' ? (
									<Avatar
										src={photoURL}
										style={{ borderRadius: '50%', width: 74, height: 74 }}
									/>
								) : (
									<IconUser size='3rem' stroke={1.5} />
								)}
							</Dropzone.Idle>
						</Group>
					</Dropzone>
					<Text size={'sm'} weight={400} style={{ textAlign: 'center' }}>
						Añadir foto
					</Text>
				</Box>
				<TextInput
					label='Nombre'
					rightSection={<IconDeviceFloppy style={{ cursor: 'pointer' }} />}
					size='sm'
					defaultValue={displayName || ''}
					placeholder='Escribe un alias.'
					radius={'md'}
				/>
			</Group>
			<Divider style={{ marginBlock: 20 }} />

			<Group position='apart'>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'start',
					}}
				>
					<Text>Correo Electrónico</Text>
					<Text size={'sm'} weight={400} color='dimmed'>
						{email}
					</Text>
				</Box>
				{/* <Button size={'sm'} variant='outline' rightIcon={<IconLink />}>
					Validar correo Electrónico
				</Button> */}
			</Group>

			<Divider style={{ marginBlock: 10 }} variant='dashed' />
			<Group position='apart'>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'start',
					}}
				>
					<Text>Contraseña</Text>
					<Text size={'sm'} weight={400} color='dimmed'>
						Establece una contraseña permanente para iniciar sesión en tu
						cuenta.
					</Text>
				</Box>
				<Button
					onClick={open}
					size={'sm'}
					rightIcon={<IconEdit />}
					variant='outline'
				>
					Cambiar contraseña
				</Button>
			</Group>
		</Container>
	)
}
