import React, { useContext } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/register";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { AuthContext } from "./context/auth";
import { DarkmodeContext } from "./context/darkmode";

function App() {
  const { currentUserToken: currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    } else return children;
  };

  const AlreadySignedIn = ({ children }: { children: React.ReactNode }) => {
    if (currentUser) {
      return <Navigate to="/" />;
    } else return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/register",
      element: (
        <AlreadySignedIn>
          <Register />
        </AlreadySignedIn>
      ),
    },
    {
      path: "/login",
      element: (
        <AlreadySignedIn>
          <Login />
        </AlreadySignedIn>
      ),
    },
  ]);

  const { darkmode } = useContext(DarkmodeContext);

  return (
    <div className={`theme-${darkmode ? "dark" : "light"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
