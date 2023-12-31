import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar  from './Components/Navbar'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './Components/Home';

const Layout = ()=>{

  return(
    <div>
       <Navbar/>
    <Outlet/>
   
   
    </div>
   
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);