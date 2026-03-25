import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// global css
import "./style/index.css";
import "./style/root.css";

// context
import ThemeContextProvider from "./context/ThemeContext/ThemeContextProvider";
import MenuContextProvider from "./context/MenuContext/MenuContextProvider";
import AuthContextProvider from "./context/AuthContext/AuthContextProvider";

// pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import NotFound from "./pages/NotFound/NotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import Marketplace from "./pages/Marketplace/Marketplace";
import DataTable from "./pages/DataTable/DataTable";
import Profile from "./pages/Profile/Profile";
import Analytics from "./pages/Analytics/Analytics";
import ProtectedRoute from "./routes/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "nft-marketplace",
            element: <Marketplace />,
          },
          {
            path: "data-tables",
            element: <DataTable />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "analytics",
            element: <Analytics />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <MenuContextProvider>
        <AuthContextProvider>
          <RouterProvider router={routes} />
        </AuthContextProvider>
      </MenuContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
