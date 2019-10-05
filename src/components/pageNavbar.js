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
		<Navbar className="pageNavbar">
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
