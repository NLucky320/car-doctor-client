import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Check from "../Pages/CheckOut/Check";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
          },
          {
            path: '/login',
            element:<Login></Login>
          },
          {
            path: '/register',
            element: <SignUp></SignUp>
          },
          {
            path: '/checkout/:id',
            element: <Check></Check>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
          },
          {
            path: '/bookings',
            element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
          }
        ]
    
  },
]);
export default router;