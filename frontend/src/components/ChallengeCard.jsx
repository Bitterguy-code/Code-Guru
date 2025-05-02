import "./challengeCard.css";
import default_image from "../assets/codeGuruLogo.png";

export default function ChallengeCard({
  img_src = default_image,
  title = "grand master oogway",
}) {
  return (
    <div className="whole_card">
      <img src={img_src} alt="ninja picture" className="card_image" />
      <div className="card_container">
        <h4>{title}</h4>
        <a href="/history">Click to see code</a>
      </div>
    </div>
  );
}
