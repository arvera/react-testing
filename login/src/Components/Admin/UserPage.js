//import './About.css';
import { useParams, Link } from "react-router-dom";

// https://dev.to/danielonugha0/building-a-login-system-using-redux-5ce3
// https://medium.com/async-la/react-navigation-are-you-the-one-8cf945a4a462


function User() {
  const params = useParams();
  return (
    <div className='flex flex-col gap-2' >
      <h1> UserManage page {params.userId}</h1>
      
      

    </div>
  );
}

export default User;
