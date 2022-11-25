import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Header from "./components/Header";
import Home from "./routes/Home";
import Users from "./routes/Users";
import User from "./routes/Hotels";
import Hotels from "./routes/Hotels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
        {
            path: "",
            element: <Home />,
          },
        {
            path: "users",
            element: <Users />,
          },
          {
            path: "users/:userId",
            element: <User />
          },
          {
            path: "hotels",
            element: <Hotels />,
          },
      ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
