import './css/login.css'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/auth/authSlice'
import { useAppDispatch } from '../../store/store'
import {
	Button,
	PasswordInput,
	Container,
	Space,
	Group,
	TextInput,
} from '@mantine/core'
import { IconLock } from '@tabler/icons-react'
import { useForm } from '@mantine/form'
import { useStatus } from '../../hooks/useStatus'
import { authLogin } from '../../store/auth'
import { IUser } from '../../interfaces/auth.interfaces'

export default function Login() {
	const { status } = useStatus()
	const dispatch = useAppDispatch()
	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},
		validate: {
			email: value => (/^\S+@\S+$/.test(value) ? null : 'Email invalido'),
			password: value => value.length > 5 ? null : 'Se requiere contraseña de 6 dígitos mínimos',
		},
	})

	const login = (values: IUser) => {
		dispatch(authLogin(values))
	}

	return (
		<div className='login_container'>
			<Container className='image_login' />
			<div className='login'>
				<Container className='login_items'>
					<div style={{ textAlign: 'center' }}>
						<h1>Iniciar sesión</h1>
					</div>
					<form onSubmit={form.onSubmit(login)}>
						<TextInput
							size='lg'
							label='Email'
							placeholder='your@email.com'
							{...form.getInputProps('email')}
						/>
						<PasswordInput
							size='lg'
							placeholder='Password'
							label='Password'
							icon={<IconLock size='1rem' />}
							{...form.getInputProps('password')}
						/>
						<Space h='sm' />
						<div style={{ textAlign: 'center' }}>
							<a href='recuperar'>¿Olvidaste tu contraseña?</a>
						</div>
						<Space h='lg' />
						<Group position='center' mt='xs'>
							<Button size='lg' type='submit' loading={status === 'checking'}>
								Iniciar sesión
							</Button>
						</Group>
					</form>
				</Container>
			</div>
		</div>
	)
}
