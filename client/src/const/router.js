import React from 'react';
import LoginPage from '../pages/login';
import SignUpPage from '../pages/signup';
import HomePage from '../pages/home';
const routers = [
    {
        path: '/login',
        exact: true,
        component: (props) => <LoginPage {...props} />,
    },
    {
        path: '/signup',
        exact: true,
        component: (props) => <SignUpPage {...props} />,
    },
    {
        path: '/home',
        exact: false,
        component: (props) => <HomePage {...props} />,
    },
];
export default routers;
