
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Error from "../Error/Error";
import Blogs from "../Pages/Blogs";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";


const router = createBrowserRouter([
    {
        path: "*",
        element: <Error></Error>,

    },
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            },
            {
                path: "/addatoy",
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/tabToys')
            },
            {
                path: "/mytoys",
                element: <MyToys></MyToys>
            }
            


        ]
    },
]);

export default router;