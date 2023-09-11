import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../models/routes'
import Login from '../components/Login/index.tsx'
import AuthGuard from '../guards/auth.guard.tsx'
import Dashboard from '../components/Dashboard/Dashboard.tsx'
import { useStatus } from '../hooks/useStatus.ts'

export default function AppRoutes() {

    const { status } = useStatus()
    console.log(window.location.pathname);
	return (
		<BrowserRouter>
		
			<Routes>
				<Route path={PublicRoutes.HOME} element={<p>home</p>} />
				<Route path={PublicRoutes.LOGIN} element={status === 'authenticated' ? <Navigate to={PrivateRoutes.DASHBOARD}/>: <Login />}  />
				<Route element={<AuthGuard />}>
					<Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
				</Route>
				<Route path='*' element={<p> Not Found</p>} />
			</Routes>
		</BrowserRouter>
	)
}
