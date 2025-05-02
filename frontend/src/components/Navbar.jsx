import "./navbar.css";
import codeGuruLogo from "../assets/codeGuruLogoTransparent.png";

export default function NavBar() {
  return (
    <div className="topnav">
      <div className="topnav_align_left">
        <a href="/">
          <img src={codeGuruLogo} alt="Logo" width="75px" height="75px" />
        </a>
        <a href="/playground">Playground</a>
        <a href="/challenge">Daily Challenge</a>
        <a href="/history">Challenge History</a>
        <a href="/newsletter">Newsletter</a>
        <a>Community</a>
        <a>Progress</a>
      </div>

      <div className="topnav_align_right">
        <>
          <a href="/signup">Sign Up</a>
          <a href="/login">Log In</a>
        </>
      </div>
    </div>
  );
}
