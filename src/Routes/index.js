import React from 'react';

import Landing from '../Containers/Landing';
import Login from '../Components/Login';
import Dashboard from '../Components/Dashboard';

import PrivateRoute from '../Components/Dashboard/PrivateRoute';
import {
	Route,
	Switch
} from 'react-router-dom';
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
const Routes = () =>(
	<Switch>  

	  <Route exact path="/" component={Landing} />
	  <Route path="/login" component={Login} />

	  <PrivateRoute path="/dashboard" component={Dashboard} />
		        			        
		<Route component={NoMatch} />
			        
  </Switch>
)
export default Routes;