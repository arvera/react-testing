import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Users from './Components/Admin/UserListPage';
import User from './Components/Admin/UserPage';
import About from './Components/About';
import Register from './Components/Register';
import NotFound from './Components/NotFound';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./store"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';
import Logout from './Components/Logout';


// Now Following: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/logout',
    element: <Logout/>
  },
  {
    path: '/admin/users',
    element: <Users/>,
    children: [
      {
        path: '/admin/users/:userId',
        element: <User/>
      }
    ]
  }
  ,
  
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
