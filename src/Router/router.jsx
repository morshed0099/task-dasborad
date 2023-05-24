import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../Pages/Dashboard";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<Dashboard />
            }
        ]
    }
])