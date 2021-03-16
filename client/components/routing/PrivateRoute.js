import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../../utils/apicalls';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const currentUser = AuthService.isAuthenticated();
    return (
        <Route {...rest} render={
            routeProps =>
                currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={"/login"} />}>

        </Route>)
}

export default PrivateRoute;