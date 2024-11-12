//import './About.css';


// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462

function Nav() {

  return (
    <nav >
      <ul class="nav-links">
        <li>Non-admin</li>
        <ul class="nav-links">
          <li>Register</li>
          <li>About</li>
        </ul>
        <li>Admin</li>
          <ul class="nav-links">
          <li>Users</li>
        </ul>
      </ul>
    </nav>
  );
}

export default Nav;
