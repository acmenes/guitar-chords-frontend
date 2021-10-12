import React from "react";

import { NavLink, Router } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import "./NavBar.css"

function NavBar() {
    return (
       <div>
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    Guitar Chordly
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/chords">Chords</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/login">Log In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/profile">Your Profile</NavLink>
                    </NavItem>
                    </Nav>
            </Navbar>
       </div> 
    )
};

export default NavBar;