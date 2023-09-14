import { createStyles, rem } from "@mantine/core";

export const DragStyles = createStyles((theme) => ({
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