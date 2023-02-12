import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const LoggedinRoutes = () => {
    const auth = localStorage.getItem("loggedin")
    const connectedUser = localStorage.getItem("currentUser")

    if (auth)
    {

        return <Outlet/>
        
    }
    else
    {
        return <Navigate to={"/login"}/>
    }

}

export default LoggedinRoutes