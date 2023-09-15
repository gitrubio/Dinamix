import React from 'react'
import { Modal, useMantineTheme, ModalProps } from '@mantine/core'


export default function GlobalModal({ children, ...props }: ModalProps) {
	const theme = useMantineTheme()
	return (
		<>
			<Modal
				{...props}
				overlayProps={{
					color:
						theme.colorScheme === 'dark'
							? theme.colors.dark[9]
							: theme.colors.gray[2],
					opacity: 0.55,
					blur: 3,
				}}
			>
				{children}
			</Modal>
		</>
	)
}
