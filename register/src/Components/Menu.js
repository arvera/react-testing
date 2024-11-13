//import './About.css';
import { NavbarCollapse } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";

// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462

function Menu() {
  const user = useSelector(selectUser);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"> CNSWAP </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link href="/admin/users">Users</Nav.Link>
            <Navbar.Text>-</Navbar.Text>
            <Nav.Link href="/About">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
          <Nav>
            {user ? <Nav.Link href="/Logout">Logout</Nav.Link> : ''}
            
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
