import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminHome from './admin-components/AdminHome.jsx';
import AdminManagement from './admin-components/AdminManagement.jsx';
import UserManagement from './admin-components/UserManagement.jsx';
import AdminLogin from './authentication-components/AdminLogin.jsx';
import Login from './authentication-components/Login.jsx';
import SignUp from './authentication-components/SignUp.jsx';
import AboutUs from './client-side-components/AboutUs.jsx';
import ContactUs from './client-side-components/ContactUs.jsx';
import Home from './client-side-components/Home.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/admin-home",
    element: <AdminHome />,
  },
  {
    path: "/admin-home/admin-management",
    element: <AdminManagement />,
  },
  {
    path: "/admin-home/user-management",
    element: <UserManagement />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
