import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
    const isAuthenticated = !!localStorage.getItem("token")
    // console.log(isAuthenticated);
    return  isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/> 

}

export default PrivateRoute
