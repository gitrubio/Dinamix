import React from 'react'
import { Burger, Header, MediaQuery } from '@mantine/core'
import { useAppDispatch } from '../../../store/store'

export default function HeaderDashboard({opened,onclick}: { opened: boolean, onclick: () => void }) {
    const dispatch = useAppDispatch()
    
	return (
		<Header height={{ base: 50, md: 50 }} p='md'>
					<div
						style={{ display: 'flex', alignItems: 'center', height: '100%' }}
					>
						<MediaQuery largerThan='sm' styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={onclick}
								size='sm'
								color={'gray'}
								mr='xl'
							/>
						</MediaQuery>
						{/* 
						<Text>Application header</Text> */}
					</div>
				</Header>
	)
}
