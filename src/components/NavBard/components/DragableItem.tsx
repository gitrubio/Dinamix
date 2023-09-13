import { Box, createStyles, getStylesRef, rem, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import {DragDropContext, Draggable, Droppable,} from 'react-beautiful-dnd';
import { IconGripVertical, IconCheck } from '@tabler/icons-react';
import { PropsOrganizationCardList } from '../../../interfaces/organizations.interface';

const useStyles = createStyles((theme) => ({
    item: {
      display: 'flex',
      userSelect: 'none',
      borderRadius: theme.radius.md,
      padding: theme.spacing.sm,
      paddingLeft: `calc(${theme.spacing.xl} - ${theme.spacing.md})`, 
      marginBottom: theme.spacing.xs,
      '&:hover': {
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
      justifyContent: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  }));
  

  
  export function DndListHandle({ data, currentId,onChange }: PropsOrganizationCardList) {
    const { classes, cx } = useStyles();
    const [state, handlers] = useListState(data);
  
    const items = state.map((item, index) => (
      <Draggable key={item.Organization.id} index={index} draggableId={item.Organization.id}>  
        {(provided, snapshot) =>  (
          <div
          onClick={()=>onChange({...item.Organization,rol: item.rol})}
            className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
            ref={provided.innerRef}
            {...provided.draggableProps}
            
          >
            <div  {...provided.dragHandleProps}   className={classes.dragHandle}>
              <IconGripVertical size="1.15rem" stroke={1.5} />
            </div>
            <Box display={'flex'}  >
            <Text className={classes.symbol}>{item.Organization.name}</Text>
            {item.Organization.id === currentId && <IconCheck size="1.15rem" stroke={1.5} />}
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