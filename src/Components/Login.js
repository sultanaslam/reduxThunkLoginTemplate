import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import {loginUser} from '../actions/authActions';

class Login extends Component {

  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };

  state = {
  	email: '',
  	password: '',
  	errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentDidUpdate(prevProps) {
    if((this.props.auth.isAuthenticated) !== (prevProps.auth.isAuthenticated))
      this.props.history.push('/dashboard');
    if((this.props.errors) !== (prevProps.errors))
      this.setState({ errors: this.props.errors });
  }

  onSubmitHandler = (e) =>{
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };
  
  changeHandler = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
  	const {errors} = this.state;

    return (
			<div className="login">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-8 m-auto">
		          <h1 className="display-4 text-center text-dark">Log In</h1>
		          <p className="lead text-center text-muted">Sign in to your account</p>
		          <form onSubmit={this.onSubmitHandler}>
		            <div className="form-group pt-4">
			            <input 
	                    type="email" 
	                    className={classnames('form-control form-control-lg',
	                      {'is-invalid': errors.email})} 
	                    placeholder="Email Address" 
	                    name="email" 
	                    value={this.state.email}
	                    onChange={this.changeHandler}
                      required
	                  />
	                  {errors.email && 
                      (<div className='invalid-feedback text-left'>
                        <h3>{errors.email}</h3>
                      </div>)
                    }                		
                </div>
                <div className="form-group">
                  <input 
                    type="password"
                    className={classnames('form-control form-control-lg',
                      {'is-invalid': errors.password})} 
                    placeholder="Password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.changeHandler}
                    required
                  />
                  {errors.password && 
                    (<div className='invalid-feedback text-left'>
                      <h3>{errors.password}</h3>
                    </div>)
                  }                	
                </div>
		            <input type="submit" className="btn btn-info btn-block btn-lg mt-4" />
		          </form>
		        </div>
		      </div>
		    </div>
		  </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);