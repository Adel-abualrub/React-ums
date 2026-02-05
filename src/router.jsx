import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/users";
import Mainlayout from "./Layouts/MainLayout/Mainlayout";

const router=createBrowserRouter([{

 
    path: "/",
    element: <Mainlayout />,
    children: [
{
   path:"Users",
   element: <Users/>
}



    ]

}])

export default router;
