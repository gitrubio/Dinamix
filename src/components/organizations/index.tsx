import React from 'react'
import { useStatus } from '../../hooks/useStatus'
import { Box, Container, Grid, Title } from '@mantine/core'
import { useAppDispatch } from '../../store/store'
import { changeCurrentOrg } from '../../store/organization'
import { Organizationstate } from '../../interfaces/organizations.interface'
import CardOrganization from './components/CardOrganization'
import { Carousel } from '@mantine/carousel'

export default function SelectOrganization() {
	const { organizations } = useStatus()
	const dispatch = useAppDispatch()

	const change = (orga: Organizationstate) => {
		dispatch(changeCurrentOrg(orga))
	}

	return (
		<Container
			display={'flex'}
			style={{
				alignItems: 'center',
				height: '100%',
				flexDirection: 'column',
			}}
		>
			<Box style={{ margin: 20, textAlign: 'center' }}>
				<Title order={1}>Selecciona una organización</Title>
			</Box>
			<Box>
				<Carousel
					slideSize='33.333333%'
					slideGap='md'
					maw={830}
					align='start'
					slidesToScroll={2}
					style={{borderRadius: 10}}
				>
					{organizations.map(organization => (
						<Carousel.Slide key={organization.Organization.id} style={{ marginLeft: 4, marginBlock: 10}}>
							<CardOrganization organization={organization} onChange={change} />
						</Carousel.Slide>
					))}
				</Carousel>
			</Box>
		</Container>
	)
}
