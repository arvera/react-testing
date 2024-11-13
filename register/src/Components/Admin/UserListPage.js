//import './About.css';
import { NavLink,Outlet } from "react-router-dom";
import Menu from "../Menu";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import User from './UserPage';
import { useSelector } from "react-redux";
import { selectUsers } from "../../Features/Users/UsersSlice";


// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462



const UserListPage = () => {
  //const users = [{id: 1,name:"angel"},{id: 2,name:"larina"}];
  const users = useSelector(selectUsers);
  const profiles = [1,2,3,4,5];
  

  const renderedListUsers = users.map((user)=> {
    return (
      <ListGroup.Item>
        <NavLink 
          key ={user.id}
          to={`${user.id}`}
          className={({isActive}) => {
            return isActive ? 'text-primary-700': '';
            }}>
            user: {user.username} | 
            password: {user.password} | 
            roles: {user.roles}
            
          </NavLink> 
      </ListGroup.Item>
      )
  }) 

  const renderListUsers2 = users.map((user)=> {
    return (
        <User key={user.id} user={user}/> 
    )
  })

  const renderedProfiles = profiles.map((profile) => {
    return (
      <ListGroup.Item>
      <NavLink 
        key ={profile}
        to={`${profile}`} 
        className={({isActive}) => {
          return isActive ? 'text-primary-700': '';
          }}
      >
        Profile {profile}
      </NavLink> 
    </ListGroup.Item>
    )
  }) 

  return (
    <div>
      <Menu/>
      <Card >
      <Card.Body>
        <Card.Title>Users Management page</Card.Title>
        <Card.Text>
        <ListGroup>
        {renderedListUsers}
      </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
      
      <div>
        <Outlet/>
      </div>

    </div>
  );


}

export default UserListPage;
