import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../Pages/Dashboard";
import Messages from "../Pages/Messages";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<Dashboard />
            },
            {
                path:"/message",
                element:<Messages />
            },
            {
                path:"/product",
                element:<Products />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:"/signup",
                element:<Signup />
            }
        ]
    }
])