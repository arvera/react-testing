//import './About.css';
import { NavLink,Outlet } from "react-router-dom";


// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462

const profiles = [1,2,3,4,5];

function Users() {
  return (
    <div className='flex flex-col gap-2' >
      <h1> Users Management page </h1>
      <div>
        {profiles.map((profile) => (
          <NavLink 
            key ={profile}
            to={`${profile}`} 
            className={({isActive}) => {
              return isActive ? 'text-primary-700': '';
              }}
          >
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet/>
      </div>

    </div>
  );
}

export default Users;
