//import './About.css';
import { NavLink,Outlet } from "react-router-dom";
import Menu from "../Menu";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import User from './UserPage';
import { useSelector } from "react-redux";
import { selectUsers } from "../../Features/Users/UsersSlice";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { 
  USER_ADDED,
  USER_REMOVED,
  USER_MODIFIED,
} from "../../Actions/types";
import { userAdded } from "../../Features/Users/UsersSlice";




// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462



const UserListPage = () => {
  //const users = [{id: 1,name:"angel"},{id: 2,name:"larina"}];
  const users = useSelector(selectUsers);

  // renders the users in a table row
  const renderedListUsers = users.map((user)=> {
    return (
      <tr key ={user.id}>
            <td>
              <NavLink to={`${user.id}`}
              className={({isActive}) => {
              return isActive ? 'text-primary-700': '';
              }}>
              {user.username}
            </NavLink> 
            </td>
            <td>{user.password}</td>
            <td>{user.roles}</td>
      </tr>
      )
  }) 

  // Renders all the users edit page in the same page
  const renderListUsers2 = users.map((user)=> {
    return (
        <User key={user.id} user={user}/> 
    )
  })


  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => setText(e.target.value)

  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && trimmedText) {
      console.log(trimmedText);
      // Dispatch the "todo added" action with this text
      dispatch(
        userAdded({ id: 4, username: trimmedText, password: 'pwd1', roles: ['ADMIN'] })
      )
      
      // And clear out the text input
      setText('')
    }
  }


  return (
    <div>
      <Menu/>
      <Card >
      <Card.Body>
        <Card.Title>Users Management page</Card.Title>
        <Card.Text>
        
          <Container>
            <Row>
              <Col sm={3}>
                <Form.Label htmlFor="filter">Filter</Form.Label>
                  <Form.Control
                    type="text"
                    id="filter"
                  />  
              </Col>
            </Row>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Roles</th>
                </tr>
              </thead>
              <tbody>
                {renderedListUsers}
              </tbody>
            </Table>
          </Container>
        </Card.Text>
      </Card.Body>
    </Card>
    <input
      type="text"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
      <div>
        <Outlet/>
      </div>

    </div>
  );


}

export default UserListPage;
