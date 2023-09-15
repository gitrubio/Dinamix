import {
	Avatar,
	Table,
	Group,
	Text,
	ActionIcon,
	ScrollArea,
    Select,
} from '@mantine/core'
import {
	IconTrashX,
} from '@tabler/icons-react'
import { justCollaborator } from '../../../../interfaces/collaborators.interface'

interface UsersStackProps {
	data: justCollaborator[]
}

export function UsersStack({ data }: UsersStackProps) {
	const rows = data.map(item => (
		<tr key={item.name} >
			<td>
				<Group spacing='sm'>
					<Avatar size={40} src={item.avatar} radius={40} />
					<div>
						<Text fz='sm' fw={500}>
							{item.name}
						</Text>
						<Text c='dimmed' fz='xs'>
							{item.email}
						</Text>
					</div>
				</Group>
			</td>
			<td>
            <Group w={300} >
				<Select
                    w={140}
                    withinPortal
                    variant='filled'
                    value={item.rol}
                    onChange={()=>{''}}
					placeholder='Elija un rol'
					data={[
						{ value: 'owner', label: 'propietario' },
						{ value: 'admin', label: 'administrador' },
						{ value: 'editor', label: 'editor' },
						{ value: 'viewer', label: 'espectador' },
					]}
				/>
                </Group>
			</td>
			<td>
				<Group position='left'>
					<ActionIcon>
						<IconTrashX size='1rem' stroke={1.5} />
					</ActionIcon>
				</Group>
			</td>
		</tr>
	))

	return (
		<ScrollArea>
			<Table sx={{ minWidth: 800}} verticalSpacing='md' highlightOnHover >
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Rol</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	)
}
