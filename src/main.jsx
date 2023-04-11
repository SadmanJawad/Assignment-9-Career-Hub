import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import JobDetails from "./components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('fakeData.json'),
      },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      {
        path: "/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('fakeData.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
