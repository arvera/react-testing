//import './About.css';
import { NavbarCollapse } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useRef, useState, useEffect } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";
import { selectIsLoggedIn,selectUser } from "../Features/UserAuth/AuthSlice";
import { Link } from "react-router-dom";

// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462

function Menu() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);


  console.log("render: ",user);
  console.log("render: ",isLoggedIn);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"> AFP </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Link className="nav-link" to="/Register">Register</Link>
            <Link className="nav-link" to="/admin/users">Users</Link>
            <Navbar.Text>-</Navbar.Text>
            <Link className="nav-link" to='/About'>About</Link>
        </Nav>
      </Navbar.Collapse>
          <Nav>
            {isLoggedIn == true ?   <Link className="nav-link" to='/Logout'> Logout [{user.username}] </Link> : ''}
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
