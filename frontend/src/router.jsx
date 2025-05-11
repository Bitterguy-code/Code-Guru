import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ChallengeDailyPage from "./pages/ChallengeDailyPage.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";
import PlaygroundPage from "./pages/PlaygroundPage.jsx";
import ChallengeHistoryPage from "./pages/ChallengeHistoryPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import { userConfirmation } from "./utilities.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: userConfirmation,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
      {
        path: "/challenge",
        element: (
          <PrivateRoute>
            <ChallengeDailyPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/history",
        element: (
          <PrivateRoute>
            <ChallengeHistoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/playground",
        element: (
          <PrivateRoute>
            <PlaygroundPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/newsletter",
        element: (
          <PrivateRoute>
            <NewsletterPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
