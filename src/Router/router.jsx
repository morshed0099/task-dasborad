import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Dashboard from "../Pages/Dashboard";
import Messages from "../Pages/Messages";


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
            }
        ]
    }
])