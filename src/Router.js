import React from 'react';
import { Switch, Route } from "react-router";
import Listings from "./components/Listings";
import Login from "./containers/Login";

const Router = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/' component={Listings} />
    </Switch>
  )
}

export default Router;