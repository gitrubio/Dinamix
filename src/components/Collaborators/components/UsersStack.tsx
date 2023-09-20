import {
	Avatar,
	Table,
	Group,
	Text,
	ActionIcon,
	ScrollArea,
	Select,
	Tooltip,
} from '@mantine/core'
import { IconTrashX } from '@tabler/icons-react'
import { Collaborator, RollCollaborator } from '../../../interfaces/collaborators.interface'
interface UsersStackProps {
	data: Collaborator[]
	userId: string
	onclick: (id: string,collaborator: Collaborator, myUser: boolean) => void
	loadRol: string
}

export function UsersStack({ data, userId , onclick, loadRol}: UsersStackProps) {
	const rows = data.map(item => (
		<tr key={item.name}>
			<td width={200}>
				<Group spacing='xs'>
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
			<td width={200}>
				<Group>
					<Select
						w={160}
						disabled={item.id === loadRol}
						withinPortal
						variant='filled'
						value={item.rol}
						onChange={(value) => {
							onclick(item.id, { ...item,rol: value as RollCollaborator }, item.userId === userId)
						}}
						placeholder='Elija un rol'
						data={[
							{ value: 'owner', label: 'Propietario' },
							{ value: 'admin', label: 'Administrador' },
							{ value: 'editor', label: 'Editor' },
							{ value: 'guest', label: 'Invitado' },
						]}
					/>
				</Group>
			</td>
			<td width={40}>
				<Group position='left'>
					<Tooltip label={item.userId === userId ? "No puedes eliminar al propietario" : "Eliminar"}>
						<ActionIcon >
							<IconTrashX size='1rem' stroke={1.5} color='red' />
						</ActionIcon>
					</Tooltip>
				</Group>
			</td>
		</tr>
	))

	return (
		<ScrollArea>
			<Table sx={{ minWidth: '100%' }} verticalSpacing='md' highlightOnHover>
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
