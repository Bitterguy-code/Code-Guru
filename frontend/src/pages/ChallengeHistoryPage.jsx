import "./challengehistory.css";
import { useState, useEffect } from "react";

import grayCircle from "../challengeAssets/grayCircle.png";
import ninjaStar from "../challengeAssets/ninjaStar.png";
import trainingDummy from "../challengeAssets/trainingDummy.png";
import katana from "../challengeAssets/katana.png";
import sai from "../challengeAssets/sai.png";
import boStaff from "../challengeAssets/boStaff.png";
import nunchaku from "../challengeAssets/nunchaku.png";
import kusarigama from "../challengeAssets/kusarigama.png";
import bokken from "../challengeAssets/bokken.png";
import gong from "../challengeAssets/gong.png";
import suit from "../challengeAssets/suit.png";

export default function ChallengeHistoryPage() {
  const [challenges, setChallenges] = useState([]);
  const weaponIcons = [
    suit,
    trainingDummy,
    katana,
    sai,
    boStaff,
    nunchaku,
    kusarigama,
    bokken,
    gong,
    ninjaStar,
  ];

  //useEffect on load - get 10 recent finished challenges, put into challenges

  //create 10 positions for each challenge
  const positions = weaponIcons.map((icon, i) => ({
    icon: challenges[i] ? icon : grayCircle,
    challenge: challenges[i] || null,
  }));

  return (
    <div className="history_container">
      <div className="history_weapons">
        {positions.map(({ icon, challenge }, i) => (
          <img
            src={icon}
            id={`weapon${i + 1}`}
            alt={challenge ? "Weapon" : "Hidden weapon"}
            // add href to link to challenges page
            // add hover to see title of weapon/challenge or "weapon not unlocked" for absence of challenge
          />
        ))}
      </div>
    </div>
  );
}
