import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const {isAuthenticated, user} = useAuth0();
    const isUser = isAuthenticated && user;
    return ( <Route {...rest} render={() => {return isUser ? children : <Redirect to="/login" />}} /> );
}
 
export default PrivateRoute;