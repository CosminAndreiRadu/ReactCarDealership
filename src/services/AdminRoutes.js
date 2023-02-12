import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AdminRoutes = () => {
    const auth = localStorage.getItem("loggedin")

    const connectedUser = localStorage.getItem("currentUser")


    if (auth && connectedUser === "admin")
    {

        return <Outlet/>
        
    }
    else
    {
        return <Navigate to={"/login"}/>
    }

}

export default AdminRoutes