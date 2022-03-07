import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import Login from '../components/login/Login';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/*' element={
                    <DashboardRoutes />
                } />
                <Route exact path='/login' element={
                    <Login />
                } />
                <Route exact path='/admin/*' element={
                    <AdminRoutes />
                } />
            </Routes>
        </Router>
    )
}

export default AppRouter
