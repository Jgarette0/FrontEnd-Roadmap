import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/404NotFoundPage";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/About",
    element: <AboutPage />,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: "/Contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
