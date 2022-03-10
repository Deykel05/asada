import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, isLoggedin }) => {
    return (
        isLoggedin
            ? children
            : <Navigate to='/login' />
    )
}

export default PrivateRoute