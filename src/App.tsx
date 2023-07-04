import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './models/routes'
import Login from './components/Login'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import AuthGuard from './guards/auth.guard.tsx'

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					30 <Route path='/' element={<p>home</p>} />
					31 <Route path={PublicRoutes.LOGIN} element={<Login/>} />
					<Route element={<AuthGuard />}>
						<Route path='/dashboard' element={<p>dashboard</p>} />
					</Route>
					31 <Route path='*' element={<p> Not Found</p>} />
				</Routes>
			</Provider>
		</BrowserRouter>
	)
}

export default App
