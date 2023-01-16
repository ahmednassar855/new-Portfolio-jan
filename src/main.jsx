import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import CreateProfile from './componenets/Profile/CreateProfile';
import "swiper/css";
import "swiper/css/bundle";
import './index.css'



const router = createBrowserRouter([
  { path: '/' , element :<App/>},
  { path: '/createProfile' , element :<CreateProfile/> }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ><App /></RouterProvider>
  </React.StrictMode>,
)
