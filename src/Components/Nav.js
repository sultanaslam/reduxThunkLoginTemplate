import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {logoutUser} from '../actions/authActions';

class Nav extends Component {

	static propTypes = {
  	logoutUser: PropTypes.func.isRequired,
  	auth: PropTypes.object.isRequired
  };

	LogoutHandler = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }
	
	render(){

		const {isAuthenticated} = this.props.auth;
		const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            href=""
            onClick={this.LogoutHandler}
            className="nav-link"
          >
            <span className="fx">
              <span className="fa fa-user" />
            </span> 
            {' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return(
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to={isAuthenticated ? '/dashboard' : '/'}>
            RMS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
		)
	}
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Nav);