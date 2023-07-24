import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SeeDetails from "../Pages/Home/Home/SeeDetails";
import Colleges from "../Pages/Colleges/Colleges";
  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
          {
              path:'/',
              element:<Home></Home>
          },
        
          {
            path: '/:collegeId',
            element: <SeeDetails></SeeDetails>,
            loader: ()=> fetch ('colleges.json')

          
            
    
          },
          {
            path:'/colleges',
            element:<Colleges></Colleges>
        },
      ]
    },
  ]);
  
  