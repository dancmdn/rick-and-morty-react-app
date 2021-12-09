import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<NavLink to="/character" activeClassName="active">Character</NavLink>
			<NavLink to="/location" activeClassName="active">Location</NavLink>
			<NavLink to="/episode" activeClassName="active">Episode</NavLink>
		</div>
	);
};

export default Navbar;