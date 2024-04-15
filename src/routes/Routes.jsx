import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Admin from "../pages/layout/Admin";
import Main from "../pages/layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/users",
    element: <Admin />,
    children: [
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
