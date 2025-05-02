import "./home.css";
import Typewriter from "../components/Typewriter";
import { useState } from "react";

export default function HomePage() {
  const [hoverDesc, setHoverDesc] = useState("");
  //on h1 hover, make right container show with description
  return (
    <div className="home_container">
      <div className="home_left_container">
        <h1
          className="light_green"
          onMouseOver={() => {
            setHoverDesc("AI documentation and blah blah blah");
            console.log(hoverDesc);
          }}
          onMouseOut={() => setHoverDesc("")}
        >
          <Typewriter text="AI-Powered Coding Mentor" />
        </h1>
        <h1
          className="dark_green"
          onMouseOver={() => {
            setHoverDesc("Community code review forum board thingy");
            console.log(hoverDesc);
          }}
          onMouseOut={() => setHoverDesc("")}
        >
          <Typewriter text="Community Code Review" />
        </h1>
        <h1
          className="light_green"
          onMouseOver={() => {
            setHoverDesc("New challenges every day");
            console.log(hoverDesc);
          }}
          onMouseOut={() => setHoverDesc("")}
        >
          <Typewriter text="Daily Challenges" />
        </h1>
        <h1
          className="dark_green"
          onMouseOver={() => {
            setHoverDesc("Up-to-date newsletter");
            console.log(hoverDesc);
          }}
          onMouseOut={() => setHoverDesc("")}
        >
          <Typewriter text="Developer Newsletter" />
        </h1>
      </div>
      <div className={hoverDesc ? "home_right_container" : ""}>
        {hoverDesc && <p className="home_right_text">{hoverDesc}</p>}
      </div>
    </div>
  );
}
