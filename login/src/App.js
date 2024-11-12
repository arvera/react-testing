import './App.css';
import { useSelector } from "react-redux";
import { selectUser } from "./Features/userSlice";
import Nav from './Components/Nav';
import About from './Components/About';
import Register from './Components/Register';
import Logout from "./Components/Logout";
import Login from "./Components/Login";


// index of tutorials: https://www.reddit.com/r/reactjs/comments/xus9kg/best_resources_to_learn_redux/
// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462
// YOUTUBE: https://www.youtube.com/watch?v=Law7wfdg_ls

// ROUTER TUTORIAL: 
// https://www.youtube.com/watch?v=oTIJunBa6MA
// 

function App() {
  const user = useSelector(selectUser);

  return (
        <div className="App">
          <Nav/>
        
          {user ? <Logout/> : <Login/>}
        </div>
  );
}

export default App;
