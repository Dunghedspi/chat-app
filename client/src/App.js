import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import routers from './const/router';
const App = () => {
    const renderRouter = (routers) => {
        if (routers) {
            return routers.map((router, index) => (
                <Route
                    key={index}
                    path={router.path}
                    exact={router.exact}
                    component={router.component}
                />
            ));
        }
    };

    return (
        <Router>
            <Switch>{renderRouter(routers)}</Switch>
            <ToastContainer />
        </Router>
    );
};
export default App;
