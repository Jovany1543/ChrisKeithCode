import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="">
			<Link to="/signup" className="btn btn-dark">SignUp</Link>
		</nav>
	);
};
