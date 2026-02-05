import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/users";
import Mainlayout from "./Layouts/MainLayout/Mainlayout";
import UserDetails from "./pages/UserDetails";

const router=createBrowserRouter([{

 
    path: "/",
    element: <Mainlayout />,
    children: [
{
   path:"Users",
   element: <Users/>
},
{
    path:"/user/:Id",
    element: <UserDetails/>
}


    ]

}])

export default router;
