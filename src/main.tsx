import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/404NotFoundPage";
import ProfilePage from "./pages/Profiles";
import { ProfileRouter } from "./pages/ProfileRouter";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/clerk-react";
import Authentication from "./pages/Auth";
import PhotographyPage from "./pages/Photography";
import RoadmapPage from "./pages/Roadmap";
import LoadingSpinner from "./components/LoadingSpinner";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change 2000 to the actual time it takes to load your content
  }, []);

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
      path: "/Photography",
      element: <PhotographyPage />,
    },
    {
      path: "/Roadmap",
      element: <RoadmapPage />,
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

  return (
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex items-center w-full max-w-5.5xl mx-auto overflow-hidden box-border border-none">
            {loading ? <LoadingSpinner /> : <RouterProvider router={router} />}
          </div>
        </ThemeProvider>
      </ClerkProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
