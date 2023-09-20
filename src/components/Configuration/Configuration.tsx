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
	ScrollArea,
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
	IconAlertCircle,
	IconLock,
	IconDeviceFloppy,
    IconLogout2,
    IconTrashX,
} from '@tabler/icons-react'
import useGetCurrentOrg from '../../hooks/useGetCurrentOrg'
import { useDisclosure } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { Avatar, Title } from '@mantine/core'

export default function Configuration() {
	const [opened, { open, close }] = useDisclosure(false)
	const theme = useMantineTheme()
	const { avatar, name , rol} = useGetCurrentOrg()
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
			<Title order={3}>Configuracion de la organizacion</Title>
			<Divider style={{ marginBlock: 20 }} />
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
			<ScrollArea h={310}>
				<Group position={'left'}>
					<Box>
						<Dropzone
							sx={{
								padding: 0,
								borderRadius: '10%',
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
										color={
											theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
										}
									/>
								</Dropzone.Reject>
								<Dropzone.Idle>
									{avatar !== '' ? (
										<Avatar
											src={avatar}
											style={{ borderRadius: '10%', width: 74, height: 74 }}
										/>
									) : (
										<IconUser size='3rem' stroke={1.5} />
									)}
								</Dropzone.Idle>
							</Group>
						</Dropzone>
						<Text size={'sm'} weight={400} style={{ textAlign: 'center' }}>
							Sube una imagen o selecciona un emoji, aparecerá en tu barra
							lateral y en las notificaciones.
						</Text>
					</Box>
				</Group>
				<Divider style={{ marginBlock: 10 }} />
				<TextInput
					label='Nombre'
					rightSection={<IconDeviceFloppy style={{ cursor: 'pointer' }} />}
					size='sm'
					defaultValue={name}
					placeholder='Escribe un alias.'
					radius={'md'}
				/>
				<Divider style={{ marginBlock: 20 }} />
				<Title order={5} weight={500} m={10}>
					Zona de riesgo
				</Title>
				<Group position='left'>
					{rol !== "owner" &&<Button
						onClick={open}
						size={'sm'}
						rightIcon={<IconLogout2 />}
						variant='outline'
                        color='gray'
					>
						Abandonar la organización
					</Button>}
					{rol === "owner" && <Button
						onClick={open}
						size={'sm'}
						rightIcon={<IconTrashX />}
						variant='outline'
                        color='red'
					>
						Eliminar la organización
					</Button>}
				</Group>
			</ScrollArea>
			<Box
				style={{
					height: 80,
					marginTop: 50,
					display: 'flex',
					borderTop: '1px solid rgba(0, 0, 0, 0.15)',
				}}
			>
				<Group spacing={'lg'} m={20}>
					<Button variant='outline' color='blue'>
						Actualizar
					</Button>
					<Button variant='outline' color='gray'>
						Cancelar
					</Button>
				</Group>
			</Box>
		</Container>
	)
}
