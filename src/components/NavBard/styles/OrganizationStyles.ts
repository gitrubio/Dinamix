import { rem, createStyles } from '@mantine/core'

export const OrgStyles = createStyles(theme => ({
	boxIcon: {
		display: 'flex',
		flexDirection: 'column',
		marginInline: 10,
		[theme.fn.smallerThan('lg')]: {
			display: 'none',
		},
	},
	organization: {
		display: 'block',
		width: '100%',
		padding: theme.spacing.xs,
		borderRadius: theme.radius.sm,
		color: theme.black,
		backgroundColor: theme.colors.gray[0],
		'&:hover': {
			backgroundColor: theme.colors.gray[2],
		},
	},
	link: {
		'&:hover': {
			backgroundColor: theme.colors.gray[1],
		},
	},
	linksBox: {
		width: '100%',
		paddingTop: 5,
		marginTop: 10,
		borderTop: `${rem(1)} solid ${theme.colors.gray[2]}`,
	},
	info: {
		padding: theme.spacing.xs,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}))
