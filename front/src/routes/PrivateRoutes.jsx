import {Outlet, Navigate} from "react-router-dom"

export const PrivateRoutes = () => {
    return (
        localStorage.getItem("token") !== null ? <Outlet/> : <Navigate to="/login" />
    )
}