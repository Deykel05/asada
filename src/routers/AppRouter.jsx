import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/*' element={
                     <DashboardRoutes />
                 }>
                   
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter
