import React from 'react'
import {
	Box,
	Container,
	Text,
	Title,
	Avatar,
	Badge,
	ScrollArea,
} from '@mantine/core'
import { PropsOrganizationCardList } from '../../interfaces/organizations.interface'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useListState } from '@mantine/hooks'
import { IconBuildingSkyscraper, IconGripVertical } from '@tabler/icons-react'
import { orgStylesSelect } from './styles/selectOrg.styles'
import { rol_color_replace, rol_replace } from '../../utils/organizations.utils'
import { IconTrashX } from '@tabler/icons-react'

export default function SelectOrganization({
	data,
	onClick,
}: PropsOrganizationCardList) {
	const [state, handlers] = useListState(data)
	const { classes, cx } = orgStylesSelect()

	const items = state.map((item, index) => (
		<Draggable
			key={item.Organization.id}
			index={index}
			draggableId={item.Organization.id}
		>
			{(provided, snapshot) => (
				<div
					onClick={() => onClick({ ...item.Organization, rol: item.rol })}
					className={cx(classes.item, {
						[classes.itemDragging]: snapshot.isDragging,
					})}
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<div {...provided.dragHandleProps} className={classes.dragHandle}>
						<IconGripVertical size='1.15rem' stroke={1.5} />
					</div>

					<Box
						sx={{
							display: 'flex',
							alignItems: 'start',
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<Text className={classes.symbol}>{item.Organization.name}</Text>
						<Badge color={rol_color_replace[item.rol]}>
							{rol_replace[item.rol]}
						</Badge>
					</Box>
					{item.Organization.avatar !== '' ? (
						<Avatar radius='sm' src={item.Organization.avatar} />
					) : (
						<IconBuildingSkyscraper
							size={40}
							style={{
								background: '#d1d1d1',
								padding: '1px',
								borderRadius: '20%',
							}}
						/>
					)}
				</div>
			)}
		</Draggable>
	))
	return (
		<Container
			display={'flex'}
			sx={{
				alignItems: 'center',
				height: '100%',
				flexDirection: 'column',
			}}
		>
			<Box style={{ margin: 20, textAlign: 'center' }}>
				<Title
					order={3}
					sx={theme => ({
						fontFamily: `Greycliff CF, ${theme.fontFamily}`,
					})}
					weight={700}
					align='center'
				>
					Selecciona una organización
				</Title>
			</Box>
			<Box>
				<DragDropContext
					onDragEnd={({ destination, source }) =>
						handlers.reorder({
							from: source.index,
							to: destination?.index || 0,
						})
					}
				>
					<Droppable droppableId='list' direction='vertical'>
						{provided => (
							<ScrollArea
								{...provided.droppableProps}
								ref={provided.innerRef}
								className={classes.dragzone}
							>
								{items}
								{provided.placeholder}
							</ScrollArea>
						)}
					</Droppable>
				</DragDropContext>
			</Box>
		</Container>
	)
}
