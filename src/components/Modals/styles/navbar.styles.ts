
import {
	rem,
	createStyles,
	getStylesRef,
} from '@mantine/core'

export const navBarStyles = createStyles(theme => ({
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
		juctifyContent: 'center',
		textDecoration: 'none',
		fontSize: theme.fontSizes.sm,
		width: '100%',
		color:theme.colors.gray[7],
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		fontWeight: 500,
		transition: 'all 100ms ease',
		'&:hover': {
			color: theme.black,
			backgroundColor: theme.colors.gray[0],
			[`& .${getStylesRef('icon')}`]: {
				color: theme.black,
			},
		},
	},

	label: {
		[theme.fn.smallerThan('lg')]: {
			display: 'none',
          },
	},

	linkActive: {
		'&, &:hover': {
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
				.color,
			[`& .${getStylesRef('icon')}`]: {
				color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
					.color,
			},
		},
	},
}))
