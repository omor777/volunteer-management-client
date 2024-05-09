import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-volunteer-post",
        element: <AddVolunteerPost />,
      },
    ],
  },
]);
