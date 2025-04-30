import "./navbar.css";
import codeGuruLogo from "../assets/codeGuruLogo.png";

export default function NavBar() {
  return (
    <div className="topnav">
      <div className="topnav_align_left">
        <a href="/">
          <img src={codeGuruLogo} alt="Logo" width="75px" height="75px" />
        </a>
        <a href="/playground">Playground</a>
        <a href="/challenge">Daily Challenge</a>
        <a href="/challenge">Challenge History</a>
        <a href="/newsletter">Newsletter</a>
        <a >Community</a>
      </div>

      <div className="topnav_align_right">
        <>
          <a>Progress</a>
          <a href="/signup">
            <button type="button">Sign Up</button>
          </a>
          <a href="/login">
            <button type="button">Log In</button>
          </a>
        </>
      </div>
    </div>
  );
}
