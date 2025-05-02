import "./challengeCard.css";
import default_image from "../assets/codeGuruLogo.png";

export default function ChallengeCard({
  img_src = default_image,
  title = "Default",
}) {
  return (
    <div className="whole_card">
      <img src={img_src} alt="clothing picture" className="card_image" />
      <div className="card_container">
        <h4>{title}</h4>
      </div>
    </div>
  );
}
