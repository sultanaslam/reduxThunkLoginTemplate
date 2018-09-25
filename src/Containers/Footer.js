import React from 'react';

const Footer = () => (
	<footer className="footer bg-dark">
		<p className="text-white text-center">All Rights Reserved. {(new Date()).getFullYear()}</p>	
	</footer>
);

export default Footer;