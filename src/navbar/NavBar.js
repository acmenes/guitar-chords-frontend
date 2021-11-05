import React from "react";

import { NavLink, Router } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css"

function NavBar({ currentUser }) {
    return (
       <div>
            <Navbar expand="md">
                <NavLink exact to="/" className="navbar-brand">
                    Guitar Chordly
                    <FontAwesomeIcon icon={faGuitar}/>
                </NavLink>

            <Nav className="ml-auto" navbar>
                {currentUser ? (
                <NavItem>
                    <NavLink to="/chords">Chords</NavLink>
                </NavItem>
                    ) : (
                        ""
                    )}
                {currentUser ? (
                <NavItem>
                    <NavLink to="/progressions">Progressions</NavLink>
                </NavItem>
                    ) : (
                        ""
                    )}
                {!currentUser ? (
                <NavItem>
                    <NavLink to="/signup">Sign Up</NavLink>
                </NavItem>
                    ) : (
                        ""
                    )}
                {!currentUser ? (
                <NavItem>
                    <NavLink to="/login">Log In</NavLink>
                </NavItem>
                    ) : (
                <NavItem>
                    <NavLink to="/logout">Log Out</NavLink>
                </NavItem>
                    )}
                {currentUser ? (
                <NavItem>
                    <NavLink to="/profile">Your Profile</NavLink>
                </NavItem>
                    ) : (
                        ""
                    )}
                    </Nav>
            </Navbar>
       </div> 
    )
};

export default NavBar;