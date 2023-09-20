import React from 'react'
import { Box, Button, Container, Divider, Group, Input, Text, TextInput, rem, useMantineTheme } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { IconPhoto,IconUser, IconUpload, IconX, IconLink, IconEdit, IconPaperclip } from '@tabler/icons-react'
import { useStatus } from '../../hooks/useStatus'

export default function Profile() {
    const theme = useMantineTheme()
    const {displayName,email} = useStatus()
	return (
		<Container size={'lg'}>
			<Group position={'left'}>
            <Box>
            <Dropzone
				sx={{
					borderRadius: '50%',
					width: 80,
					height: 80,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'start',
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
						<IconUser size='3rem' stroke={1.5} />
					</Dropzone.Idle>
				</Group>
			</Dropzone>
            <Text size={'sm'} weight={400} style={{ textAlign: 'center' }}>Añadir foto</Text>
            </Box>
            <TextInput label="Nombre" rightSection={<IconEdit/>} size='sm' value={displayName || ""} placeholder='Escribe un alias.' radius={"md"}/>
            </Group>
            <Divider style={{marginBlock: 20}}/>
         
                <Group position='apart'>
                <Box style={{ display: "flex", flexDirection: "column", justifyContent: "start"}}>
                      <Text>Correo Electrónico</Text>
                    <Text size={'sm'} weight={400} color='dimmed'>{email}</Text>  
                </Box>
                <Button size={'sm'} variant='outline' rightIcon={<IconLink/>}>Modificar correo electrónico</Button>
                </Group>

                <Divider style={{marginBlock: 10}} variant='dashed'/>
                <Group position='apart'>
                <Box style={{ display: "flex", flexDirection: "column", justifyContent: "start"}}>
                      <Text>Contraseña</Text>
                    <Text size={'sm'} weight={400}  color='dimmed' >Establece una contraseña permanente para iniciar sesión en tu cuenta.</Text>  
                </Box>
                <Button size={'sm'} rightIcon={<IconEdit/>} variant='outline'>Cambiar contraseña</Button>
                </Group>
		</Container>
	)
}
