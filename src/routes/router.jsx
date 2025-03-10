import Mainlayout from "@/layouts/main-layout";
import About from "@/pages/main/about/about";
import Home from "@/pages/main/home/home";
import Pricing from "@/pages/main/pricing/pricing";
import React from "react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/about",
    element: <h1>About Page</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact Page</h1>,
  },
]);
