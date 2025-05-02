import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ChallengeDailyPage from "./pages/ChallengeDailyPage.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";
import PlaygroundPage from "./pages/PlaygroundPage.jsx";
<<<<<<< HEAD
import ChallengeHistoryPage from "./pages/ChallengeHistoryPage.jsx";
=======
import SignUpPage from "./pages/SignUpPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import ChallengesHistoryPage from "./pages/ChallengesHistoryPage.jsx";
>>>>>>> main

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/challenge",
<<<<<<< HEAD
        element: <ChallengeDailyPage/>
=======
        element: <ChallengesHomePage />,
>>>>>>> main
      },
      {
        path: "/history",
        element: <ChallengeHistoryPage/>
      },
      {
        path: "/playground",
        element: <PlaygroundPage />,
      },
      {
        path: "/newsletter",
        element: <NewsletterPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
    ],
  },
]);

export default router;
