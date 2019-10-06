import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "../componentcss/pageNavbar.css";

function PageNavbar() {
	return (
		<Navbar>
			<Nav>
				<NavItem>
					<NavLink href="#about">About</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#projects">Projects</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#statement">Connor</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#skills">Skills</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#contact">Contact</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
}

export default PageNavbar;
