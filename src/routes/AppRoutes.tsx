import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from '../models/routes'
import Login from '../components/Login/index.tsx'
import AuthGuard from '../guards/auth.guard.tsx'
import { useCheckAuth } from '../hooks/useCheckAuth.ts'
import Dashboard from '../components/Dashboard/Dashboard.tsx'

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<p>home</p>} />
				<Route
					path={PublicRoutes.LOGIN}
					element={<Login />}
				/>
				<Route element={<AuthGuard />}>
					<Route path='/dashboard' element={<Dashboard/>} />
				</Route>
				31 <Route path='*' element={<p> Not Found</p>} />
			</Routes>
		</BrowserRouter>
	)
}
