import React from 'react'
import {
	ActionIcon,
	Card,
	Group,
	Image,
	Text,
} from '@mantine/core'
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react'
import { DynamicsCardProps } from '../../interfaces/dynamics.interface'
import { cardStyles } from './styles'

export default function DynamicCard({
	name,
	image,
	type,
}: DynamicsCardProps) {
	const { classes, theme } = cardStyles()
	
	return (
		<Card withBorder p='md' radius='md' className={classes.card}>
			<Card.Section>
				<Image withPlaceholder src={image} height={180} />
			</Card.Section>

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
