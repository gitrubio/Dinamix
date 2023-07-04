import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './models/routes'
import Login from './components/Login'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'


function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					30 <Route path='/' element={<p>asdasdas</p>} />
					31 <Route path={PublicRoutes.LOGIN} element={<Login />} />
					31 <Route path='*' element={<p> Not Found</p>} />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}

export default App
