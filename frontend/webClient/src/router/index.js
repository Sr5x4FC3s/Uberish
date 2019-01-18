import React from  'react';
import { Switch } from 'react-router'
import { Route } from 'react-router-dom';
import Login from '../components/loginModule/login';
import CreateAccount from '../components/loginModule/createAccount';
import Locations from '../components/searchModule/locations';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/create-account' component={CreateAccount} />
      <Route path='/search' component={Locations} />
    </Switch>
  )
};

export default Routes;