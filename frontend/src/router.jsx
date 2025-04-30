import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import ChallengesHomePage from "./pages/ChallengesHomePage.jsx";
import PlaygroundPage from "./pages/PlaygroundPage.jsx";

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
        path: "/playground",
        element: <PlaygroundPage />,
      },
    ],
  },
]);

export default router;
