import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import BeAVolunteer from "../pages/BeAVolunteer/BeAVolunteer";
import Home from "../pages/Home/Home";
import MyVolunteerReqPost from "../pages/Home/MyVolunteerReqPost/MyVolunteerReqPost";
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost";
import NeedVolunteer from "../pages/NeedVolunteer/NeedVolunteer";
import PostUpdate from "../pages/PostUpdate/PostUpdate";
import VolunteerPostDetails from "../pages/VolunteerPostDetails/VolunteerPostDetails";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddVolunteerPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/be-a-volunteer/:id",
        element: <BeAVolunteer />,
      },
      {
        path: "/volunteer-post-details/:id",
        element: (
          <PrivateRoute>
            <VolunteerPostDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteers/s/${params.id}`),
      },
      {
        path: "/need-volunteer",
        element: <NeedVolunteer />,
      },
      {
        path: "/manage-my-post",
        element: (
          <PrivateRoute>
            <ManageMyPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-volunteer-req-post",
        element: (
          <PrivateRoute>
            <MyVolunteerReqPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/post-update/:id",
        element: <PostUpdate />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteers/s/${params.id}`),
      },
    ],
  },
]);
