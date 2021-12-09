import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="_container">
				<div className="footer__container">
					<div>
						This project was designed to visualize data from <a target="_blank" href="https://rickandmortyapi.com/">Rick and Morty API</a>, and also for fun and practicing in React JS development.
					</div>
					<div>
						by <a target="_blank" href="https://github.com/dancmdn">dancmdn</a> 2021
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;