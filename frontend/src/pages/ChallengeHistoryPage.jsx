import "./challengehistory.css";
import { useState, useEffect } from "react";

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
import ninjaStarHidden from "../challengeAssets/ninjaStarHidden.png";
import trainingDummyHidden from "../challengeAssets/trainingDummyHidden.png";
import katanaHidden from "../challengeAssets/katanaHidden.png";
import saiHidden from "../challengeAssets/saiHidden.png";
import boStaffHidden from "../challengeAssets/boStaffHidden.png";
import nunchakuHidden from "../challengeAssets/nunchakuHidden.png";
import kusarigamaHidden from "../challengeAssets/kusarigamaHidden.png";
import bokkenHidden from "../challengeAssets/bokkenHidden.png";
import gongHidden from "../challengeAssets/gongHidden.png";
import suitHidden from "../challengeAssets/suitHidden.png";

export default function ChallengeHistoryPage() {
  const [challenges, setChallenges] = useState([]);
  const weaponIcons = [
    { normal: suit, hidden: suitHidden },
    { normal: trainingDummy, hidden: trainingDummyHidden },
    { normal: katana, hidden: katanaHidden },
    { normal: sai, hidden: saiHidden },
    { normal: boStaff, hidden: boStaffHidden },
    { normal: nunchaku, hidden: nunchakuHidden },
    { normal: kusarigama, hidden: kusarigamaHidden },
    { normal: bokken, hidden: bokkenHidden },
    { normal: gong, hidden: gongHidden },
    { normal: ninjaStar, hidden: ninjaStarHidden },
  ];

  //useEffect on load - get 10 recent finished challenges, put into challenges

  //create 10 positions for each challenge
  const positions = weaponIcons.map((icon, i) => ({
    icon: challenges[i] ? icon.normal : icon.hidden,
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
