import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Dashboard extends Component {

  // static propTypes = {
  //   logoutUser: PropTypes.func.isRequired,
  //   auth: PropTypes.object.isRequired
  // };

  render() {
    return (
      <div className="dashboard">

          <h1>DASHBOARD</h1>

      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   auth: state.auth
// });

export default connect(null, {})(Dashboard);