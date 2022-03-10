import React from 'react'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, isLoggedin }) => {
    return (
        !isLoggedin ?
            children :
            <Navigate to='/admin' />
    )
}

export default PublicRoute