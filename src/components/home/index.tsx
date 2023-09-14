import React from 'react'
import { Title, SimpleGrid, Grid, Box, Center } from '@mantine/core'
import { dataDynamics } from './utils'
import DynamicCard from '../DynamicCard'
export default function Home() {
	const cards = dataDynamics.map(item => (
		<DynamicCard
			key={item.id}
			{...item}
			onClick={() => {
				('')
			}}
		/>
	))

	return (
		<Box sx={{ marginBlock: 20 }}>
			<Grid>
				<Box  sx={{ margin: 5 }}>
					<Center>
						<Title order={4}>Recientes</Title>
					</Center>
				</Box>
				<SimpleGrid
					cols={4}
					breakpoints={[
						{ maxWidth: 'md', cols: 2 },
						{ maxWidth: 'sm', cols: 1 },
					]}
					sx={{ width: '100%' }}
				>
					{cards}
				</SimpleGrid>
			</Grid>
		</Box>
	)
}
