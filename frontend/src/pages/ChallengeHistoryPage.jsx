import "./challengehistory.css";
import ChallengeCard from "../components/ChallengeCard";

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
  return (
    <div className="history_container">
      <div className="history_weapons">
        <img src={ninjaStar} id="weapon1"></img>
        <img src={trainingDummy} id="weapon2"></img>
        <img src={katana} id="weapon3"></img>
        <img src={sai} id="weapon4"></img>
        <img src={boStaff} id="weapon5"></img>
        <img src={nunchaku} id="weapon6"></img>
        <img src={kusarigama} id="weapon7"></img>
        <img src={bokken} id="weapon8"></img>
        <img src={gong} id="weapon9"></img>
        <img src={suit} id="weapon10"></img>
      </div>
    </div>
  );
}
