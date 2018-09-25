import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import jwt_decode from 'jwt-decode';

import store from './Store';
import {setAuthToken} from './utils';
import {setCurrentUser, logoutUser} from './actions/authActions';

import Header from './Containers/Header';
import Footer from './Containers/Footer';
import Routes from './Routes';

import './App.css';

if (localStorage.jwtToken) {

  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}


class App extends Component {

  render() {
    return (
    	<Provider store={store}>
	      <Router>
		      <div className="App">
		        <Header />
		        <Routes />
		        <Footer />
		      </div>
		    </Router>  
	    </Provider>
    );
  }
}

export default App;