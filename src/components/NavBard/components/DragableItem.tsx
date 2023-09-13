import { Box, createStyles, rem, Text, Avatar } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import {DragDropContext, Draggable, Droppable,} from 'react-beautiful-dnd';
import { IconGripVertical, IconCheck, IconBuildingSkyscraper } from '@tabler/icons-react';
import { PropsOrganizationCardList } from '../../../interfaces/organizations.interface';

const useStyles = createStyles((theme) => ({
    item: {
      display: 'flex',
      userSelect: 'none',
      borderRadius: theme.radius.md,
      padding: theme.spacing.sm,
      paddingLeft: 0, 
      marginBottom: theme.spacing.xs,
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.colors.gray[2],
        color: theme.black,
    },
    },
  
    itemDragging: {
      boxShadow: theme.shadows.sm,
    },
  
    symbol: {
      fontSize: rem(14),
      fontWeight: 500,
      width: rem(200),
    },
  
    dragHandle: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100%',
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.md,
    },
  }));
  

  
  export function DndListHandle({ data, currentId, onClick }: PropsOrganizationCardList) {
    const { classes, cx } = useStyles();
    const [state, handlers] = useListState(data);
  
    const items = state.map((item, index) => (
      <Draggable key={item.Organization.id} index={index} draggableId={item.Organization.id}>  
        {(provided, snapshot) =>  (
          <div
          onClick={()=>onClick({...item.Organization,rol: item.rol})}
            className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <Box  className={classes.dragHandle} >
            <div  {...provided.dragHandleProps}  >
              <IconGripVertical size="1.15rem" stroke={1.5} style={{ marginRight: 5}}/>
            </div>
            {item.Organization.avatar !== '' ? (
							<Avatar radius='sm' src={item.Organization.avatar} />
						) : (
							<IconBuildingSkyscraper
								size={41}
								style={{
									background: '#d1d1d1',
									padding: '1px',
									borderRadius: '5px',
								}}
							/>
						)}
            </Box>
            <Box display={'flex'}  >
            <Text className={classes.symbol}>{item.Organization.name}</Text>
            {item.Organization.id === currentId && <IconCheck size="2.15rem" stroke={1.5} />}
            </Box>
          </div>
        )}
      </Draggable>
    ));
  
    return (
      <DragDropContext
        
        onDragEnd={({ destination, source }) =>
          handlers.reorder({ from: source.index, to: destination?.index || 0 })
        }
      >
        <Droppable droppableId="list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }