import { createStyles, rem } from "@mantine/core";

export const organizationsStyles = createStyles((theme) => ({
    grid: {
        width: '100%',
        height: '100%',
        display: 'fex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
  
    boxForm: {
        paddingInline: 15,
        paddingBottom: 15,
        display: 'flex',
        width: '100%',
        alignItems: 'stretch',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
        borderRight: '3px dashed #e0e0e0',
        [theme.fn.smallerThan('sm')]: {
            borderRight: 'none',
            borderBottom: '3px dashed #e0e0e0',
          },
    },
  }));