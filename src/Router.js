import React from 'react';
import { Switch, Route, Redirect } from "react-router";
import Listings from "./containers/Listings";
import Login from "./components/Login";
import AddListing from './containers/AddListing';
import Details from './containers/Details'
import { checkAuth } from "./auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )}
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/add' component={AddListing} />
      <Route exact path='/details/:id' component={Details} />
      <Route exact path='/' component={Listings} />
      <Route component={() => <div>404 Not Found</div>}/>
    </Switch>
  )
}

export default Router;