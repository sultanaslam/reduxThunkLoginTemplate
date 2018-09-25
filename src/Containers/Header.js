import React from 'react';
import {withRouter} from 'react-router-dom';
import Nav from '../Components/Nav';

const Header = props => (
	<header className="header">
		<Nav history = {props.history} />
	</header>
);

export default withRouter(Header);