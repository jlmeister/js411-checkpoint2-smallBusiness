import React from 'react';
import { Switch, Route } from "react-router";
import Listings from "./containers/Listings";
import Login from "./components/Login";
import AddListing from './containers/AddListing';

const Router = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/add' component={AddListing} />
      <Route path='/' component={Listings} />
    </Switch>
  )
}

export default Router;