import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="_container">
				<div className="navbar__container">
					<div className="navbar__logo">Rick and Morty</div>
					<div className="navbar__links">
						<NavLink to="/character" activeClassName="active">Character</NavLink>
						<NavLink to="/location" activeClassName="active">Location</NavLink>
						<NavLink to="/episode" activeClassName="active">Episode</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;