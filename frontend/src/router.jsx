import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ChallengesHomePage from "./pages/ChallengesHomePage.jsx";
import NewsletterPage from "./pages/NewsletterPage.jsx";
import PlaygroundPage from "./pages/PlaygroundPage.jsx";
import ChallengesHistoryPage from "./pages/ChallengesHistoryPage.jsx";

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
        element: <ChallengesHomePage/>
      },
      {
        path: "/history",
        element: <ChallengesHistoryPage/>
      },
      {
        path: "/playground",
        element: <PlaygroundPage/>,
      },
      {
        path: "/newsletter",
        element: <NewsletterPage/>,
      },
    ],
  },
]);

export default router;
