import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/404NotFoundPage";
import ContactPage from "./pages/Contact";
import ProfilePage from "./pages/Profiles";
import { ProfileRouter } from "./pages/ProfileRouter";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/clerk-react";
import Authentication from "./pages/Auth";
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
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
  {
    path: "/Profiles",
    element: <ProfilePage />,
    children: [
      {
        path: "/Profiles/:profileId",
        element: <ProfileRouter />,
      },
    ],
  },
  {
    path: "/Signin",
    element: <Authentication />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex items-center w-full max-w-5.5xl mx-auto overflow-hidden box-border border-none">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </ClerkProvider>
  </React.StrictMode>
);
