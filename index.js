import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/APP";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./src/components/About";
import RestaurantsHome from "./src/components/Body";
import ContactPage from "./src/components/Contact";
import RestaurantsPages from "./src/components/RestaurentsPages";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <RestaurantsHome />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsPages />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
