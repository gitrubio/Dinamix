import React from 'react'
import { PropsOrganizationCardList } from '../../interfaces/organizations.interface'
import {
	Box,
	Button,
	Group,
	SimpleGrid,
	TextInput,
	Title,
	Grid,
	useMantineTheme,
	rem,
} from '@mantine/core'
import {
	IconPhoto,
	IconUpload,
	IconX,
} from '@tabler/icons-react'
import SelectOrganization from './SelectOrganization'
import { useForm } from '@mantine/form'
import { organizationsStyles } from './styles'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'

export default function CreateOrSelectOrganization(
	props: PropsOrganizationCardList
) {
	const theme = useMantineTheme()
	const { classes } = organizationsStyles()
	const form = useForm({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		validate: {
			name: value => value.trim().length < 2,
			email: value => !/^\S+@\S+$/.test(value),
			subject: value => value.trim().length === 0,
		},
	})

	return (
		<Grid className={classes.grid}>
			<Box style={{ margin: 10 }}>
			</Box>

			<SimpleGrid
				spacing={'xs'}
				cols={2}
				breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
				sx={{
					borderRadius: 20,
					boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
				}}
			>
				<Box className={classes.boxForm}>
					<form
						onSubmit={form.onSubmit(data => {
							console.log(data)
						})}
					>
						<Title
							order={3}
							sx={theme => ({
								paddingBottom: 50,
								fontFamily: `Greycliff CF, ${theme.fontFamily}`,
							})}
							weight={700}
							align='center'
						>
							Crear Organización
						</Title>
						<Dropzone
							sx={{borderRadius: '50%', width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto'}}
							onDrop={files => console.log('accepted files', files)}
							onReject={files => console.log('rejected files', files)}
							maxSize={3 * 1024 ** 2}
							accept={IMAGE_MIME_TYPE}
							
						>
							<Group
								position='center'
								spacing='xl'
								style={{ minHeight: rem(220), pointerEvents: 'none' }}
							>
								<Dropzone.Accept>
									<IconUpload
										size='3.2rem'
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
										size='3.2rem'
										stroke={1.5}
										color={
											theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
										}
									/>
								</Dropzone.Reject>
								<Dropzone.Idle>
									<IconPhoto size='3.2rem' stroke={1.5} />
								</Dropzone.Idle>
							</Group>
						</Dropzone>
						<TextInput
							label='Nombre'
							placeholder='name'
							mt='md'
							name='subject'
							variant='filled'
							{...form.getInputProps('subject')}
						/>
						<Group position='center' mt='xl'>
							<Button type='submit' size='md'>
								Crear Organización
							</Button>
						</Group>
					</form>
				</Box>

				<Box>
					<SelectOrganization {...props} />
				</Box>
			</SimpleGrid>
		</Grid>
	)
}
