import "./challengeprogress.css";
import { useState, useEffect } from "react";

import { getCompletedChallenges } from "../utilities";

import dojoInside from "../challengeAssets/dojoInside.png";
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
import redPanda from "../challengeAssets/redPanda.png";

export default function ChallengeProgressPage() {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const weaponIcons = [
    { normal: suit, hidden: suitHidden, title: "Ninja Suit" },
    {
      normal: trainingDummy,
      hidden: trainingDummyHidden,
      title: "Training Dummy",
    },
    { normal: katana, hidden: katanaHidden, title: "Katana" },
    { normal: sai, hidden: saiHidden, title: "Sai" },
    { normal: boStaff, hidden: boStaffHidden, title: "Bo Staff" },
    { normal: nunchaku, hidden: nunchakuHidden, title: "Nunchaku" },
    { normal: kusarigama, hidden: kusarigamaHidden, title: "Kusarigama" },
    { normal: bokken, hidden: bokkenHidden, title: "Bokken" },
    { normal: gong, hidden: gongHidden, title: "Gong" },
    { normal: ninjaStar, hidden: ninjaStarHidden, title: "Shuriken" },
  ];

  //useEffect on load - get 10 finished challenges, put into challenges
  useEffect(() => {
    // setChallenges([true,true,true,true,true,true,true,true,true,true])
    getCompletedChallenges()
      .then((result) => setChallenges(result.slice(0, 10)))
      .catch(console.error);
  }, []);

  //create 10 positions for each challenge
  const positions = weaponIcons.map((icon, i) => ({
    icon: challenges[i] ? icon.normal : icon.hidden,
    challengeObj: challenges[i] || null,
    title: challenges[i] ? icon.title : null,
  }));

  const handleClick = (challengeObj) => {
    challengeObj
      ? // ? console.log(`this is the answer ${challengeObj.id}`)
        setSelectedChallenge(challengeObj)
      : alert(
          "Weapon not unlocked. Do more daily challenges to unlock this weapon."
        );
  };
  return (
    <div className="progress_container">
      <img
        src={dojoInside}
        alt="Inside of dojo"
        className="progress_background"
      ></img>
      <div className="progress_weapons">
        {positions.map(({ icon, challengeObj, title }, i) => (
          <img
            src={icon}
            id={`weapon${i + 1}`}
            alt={challengeObj ? "Weapon" : "Hidden weapon"}
            onClick={() => handleClick(challengeObj)}
            title={title ? title : "Hidden weapon"} //add challenge title after title -> title + \n challenge
          />
        ))}
        {challenges.length === 10 && (
          <img src={redPanda} className="master_panda"></img>
        )}
      </div>
      
      {/* display challenge info */}
      {selectedChallenge && (
        <div className="modal_overlay" onClick={() => setSelectedChallenge(null)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedChallenge.challenge.questionTitle}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedChallenge.challenge.question,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
