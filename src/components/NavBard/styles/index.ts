
import {
	rem,
	createStyles,
	getStylesRef,
} from '@mantine/core'

export const useStyles = createStyles(theme => ({
	header: {
		paddingBottom: theme.spacing.md,
		marginBottom: `calc(${theme.spacing.md} * 1.5)`,
		borderBottom: `${rem(1)} solid ${theme.colors.gray[2]}`,
	},
	searchCode: {
		fontWeight: 700,
		fontSize: rem(10),
		backgroundColor: theme.colors.gray[0],
		border: `${rem(1)} solid ${ theme.colors.gray[2]}`,
	},
	footer: {
		paddingTop: theme.spacing.md,
		marginTop: theme.spacing.md,
		borderTop: `${rem(1)} solid ${theme.colors.gray[2]}`,
	},

	link: {
		...theme.fn.focusStyles(),
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		fontSize: theme.fontSizes.sm,
		width: '100%',
		color:theme.colors.gray[7],
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		fontWeight: 500,
		transition: 'all 100ms ease',
		'&:hover': {
			backgroundColor: theme.colors.gray[0],
			color: theme.black,
			[`& .${getStylesRef('icon')}`]: {
				color: theme.black,
			},
		},
	},

	linkIcon: {
		ref: getStylesRef('icon'),
		color: theme.colors.gray[6],
		marginRight: theme.spacing.sm,
	},

	linkActive: {
		paddingLeft: theme.spacing.lg,
		'&, &:hover': {
			backgroundColor: theme.fn.variant({
				variant: 'light',
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
				.color,
			[`& .${getStylesRef('icon')}`]: {
				color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
					.color,
			},
		},
	},
}))
