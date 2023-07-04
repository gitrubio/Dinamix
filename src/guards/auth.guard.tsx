import { useAppSelector } from "../store/store"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../models/routes"

export const AuthGuard = () => {
    
    const userState = useAppSelector((store) => store.auth)
    console.log('userState',userState);
    return userState.status === 'authenticated' ? <Outlet/> : <Navigate to={PublicRoutes.LOGIN}/>
}

export default AuthGuard