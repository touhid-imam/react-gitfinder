import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ErrorPage from './components/errorPage';
import Login from './components/login';
import PrivateRoute from './components/route/privateRoute';
import AuthWrapper from './components/wrapper/authWrapper';


function App() {
  return (
    <div className="Git Finder">
      <AuthWrapper>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact>
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
