import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import "../componentcss/pageNavbar.css";

function PageNavbar() {
	return (
		<Navbar className="pageNavbar nav-bar" color="dark">
			<Nav>
				<NavItem className="navItemStyle">
					<NavLink href="#about">About</NavLink>
				</NavItem>
				<NavItem className="navItemStyle">
					<NavLink href="#projects">Projects</NavLink>
				</NavItem>
				<NavItem className="navItemStyle">
					<NavLink href="#statement">Connor</NavLink>
				</NavItem>
				<NavItem className="navItemStyle">
					<NavLink href="#skills">Skills</NavLink>
				</NavItem>
				<NavItem className="navItemStyle">
					<NavLink href="#contact">Contact</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
}

export default PageNavbar;
