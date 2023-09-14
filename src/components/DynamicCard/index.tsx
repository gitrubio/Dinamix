import React from 'react'
import {
	ActionIcon,
	Badge,
	Card,
	Group,
	Image,
	Text,
} from '@mantine/core'
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react'
import { cardStyles } from './styles'
import { DynamicsCardProps } from '../../interfaces/dynamics.interface'
import { color_status } from '../../utils/dynamics.utils'

export default function DynamicCard({
	name,
	status,
	image,
	type,
}: DynamicsCardProps) {
	const { classes, theme } = cardStyles()
	
	return (
		<Card withBorder p='md' radius='md' className={classes.card}>
			<Card.Section>
				<Image withPlaceholder src={image} height={180} />
			</Card.Section>

			{/* <Badge className={classes.rating} variant='filled' color={color_status[status]}>
				{status}
			</Badge> */}

			<Text className={classes.title} fw={500} component='a'>
				{name}
			</Text>

			<Text fz='sm' color='dimmed' lineClamp={4}>
				{type}
			</Text>

			<Group position='apart' className={classes.footer}>
				<Group spacing={8} mr={0}>
					<ActionIcon className={classes.action}>
						<IconHeart size='1rem' color={theme.colors.red[6]} />
					</ActionIcon>
					<ActionIcon className={classes.action}>
						<IconBookmark size='1rem' color={theme.colors.yellow[7]} />
					</ActionIcon>
					<ActionIcon className={classes.action}>
						<IconShare size='1rem' />
					</ActionIcon>
				</Group>
			</Group>
		</Card>
	)
}
