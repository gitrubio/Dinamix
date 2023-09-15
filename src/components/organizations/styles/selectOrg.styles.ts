import { createStyles, rem } from "@mantine/core";

export const orgStylesSelect = createStyles((theme) => ({
    dragzone: {
        height: 300,
      },
    item: {
      display: 'flex',
      userSelect: 'none',
      height: rem(70),
      alignItems: 'center',
      borderRadius: theme.radius.md,
      padding: theme.spacing.sm,
      border: `1px solid ${theme.colors.gray[2]}`,
      paddingLeft: `calc(${theme.spacing.xl} - ${theme.spacing.md})`, 
      marginBottom: theme.spacing.lg,
      
      '&:hover': {
        cursor: 'pointer',
       boxShadow: theme.shadows.sm,
        color: theme.black,
    },
    },
  
    itemDragging: {
      boxShadow: theme.shadows.lg,
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
    delete: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      '&:hover': {
        color: theme.colors.red[6],
    },
    },
  }));