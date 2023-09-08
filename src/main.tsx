import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Notifications } from '@mantine/notifications'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Notifications />
			<App />
		</MantineProvider>
	</React.StrictMode>
)
