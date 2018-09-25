import React from 'react';
import {Link} from 'react-router-dom';

const Landing = props => {

	 return(
		<div className="landing">
			<h1 className="text-light">Login System</h1>
			<Link className="btn btn-light btn-lg" to="/login">
				LOGIN
			</Link>
			{" "}
			<Link className="btn btn-light btn-lg" to="/contact">
				CONTACT
			</Link>
		</div>
  )
}

export default Landing;