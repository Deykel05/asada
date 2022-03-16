import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from '../actions/auth';
import AdminRoutes from './AdminRoutes';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../components/login/Login';

const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setchecking] = useState(true);

    const [isLoggedin, setIsLoggedIn] = useState(false);

    useEffect(() => {
         const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setchecking(false);
        });

    }, [dispatch, setchecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }
    return (
        <Router>
            <Routes>
                <Route exact path='/*' element={
                    <PublicRoute
                        isLoggedin={isLoggedin}
                    >
                        <DashboardRoutes />
                    </PublicRoute>

                } />
                <Route exact path='/login' element={
                    <PublicRoute
                        isLoggedin={isLoggedin}
                    >
                        <Login />
                    </PublicRoute>
                } />
                <Route exact path='/admin/*' element={
                    <PrivateRoute
                        isLoggedin={isLoggedin}
                    >
                        <AdminRoutes />
                    </PrivateRoute>
                } />


            </Routes>
        </Router>
    )
}

export default AppRouter
