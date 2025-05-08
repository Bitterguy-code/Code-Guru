import "./navbar.css";
import codeGuruLogo from "../assets/codeGuruLogoTransparent.png";

export default function NavBar({ user, handleLogout }) {
  return (
    <div className="topnav">
      <div className="topnav_align_left">
        <a href="/">
          <img src={codeGuruLogo} alt="Logo" width="75px" height="75px" />
        </a>
        {user ? (
          <>
            <a href="/playground">Playground</a>
            <a href="/challenge">Daily Challenge</a>
            <a href="/history">Challenge History</a>
            <a href="/newsletter">Newsletter</a>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="topnav_align_right">
        {user ? (
          <>
            <a>Hello {user}!</a>
            <a onClick={handleLogout} className="topnav_logout">
              Logout
            </a>
          </>
        ) : (
          <>
            <a href="/signup">Sign Up</a>
            <a href="/login">Log In</a>
          </>
        )}
      </div>
    </div>
  );
}
