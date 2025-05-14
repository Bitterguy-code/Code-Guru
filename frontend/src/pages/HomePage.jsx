import "./home.css";
import Typewriter from "../components/Typewriter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [hoverDesc, setHoverDesc] = useState("");
  //on h1 hover, make right container show with description
  return (
    <div className="home_container">
      <div className="home_left_container">
        <h1
          className="light_green"
          onMouseOver={() => {
            setHoverDesc(
              "Get personalized code reviews and guidance from an AI mentor"
            );
            console.log(hoverDesc);
          }}
          onMouseOut={() => setHoverDesc("")}
          onClick={() => navigate("/playground")}
        >
          <Typewriter text="AI-Powered Coding Mentor" />
        </h1>
        <h1
          className="dark_green"
          onMouseOver={() => {
            setHoverDesc(
              "Practice and improve your coding skills with a new challenge every day"
            );
            console.log(hoverDesc);
          }}
          onMouseOut={() => setHoverDesc("")}
          onClick={() => navigate("/challenge")}
        >
          <Typewriter text="Daily Challenges" />
        </h1>
        <h1
          className="light_green"
          onMouseOver={() => {
            setHoverDesc(
              "Complete daily coding challenges to unlock all 10 dojo items"
            );
            console.log(hoverDesc);
          }}
          onMouseOut={() => setHoverDesc("")}
          onClick={() => navigate("/progress")}
        >
          <Typewriter text="Unlock Dojo Items" />
        </h1>
        <h1
          className="dark_green"
          onMouseOver={() => {
            setHoverDesc(
              "Stay up-to-date and informed about latest tech news and trends"
            );
            console.log(hoverDesc);
          }}
          onMouseOut={() => setHoverDesc("")}
          onClick={() => navigate("/newsletter")}
        >
          <Typewriter text="Developer Newsletter" />
        </h1>
      </div>
      {/* on text hover, show the right description block */}
      <div className={hoverDesc && "home_right_container"}>
        {hoverDesc && <p className="home_right_text">{hoverDesc}</p>}
      </div>
    </div>
  );
}
