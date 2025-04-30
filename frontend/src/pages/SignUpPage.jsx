import "./signup.css";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      alert("Passwords do not match");
      return;
    } else {
      //userRegistration(email,username,password)
      //if(user) then alert success and navigate to some other page
      alert("Successful sign up");
    }
  };
  return (
    <div className="signup_container">
      <div className="signup_left"></div>
      <div className="signup_right">
        <form className="signup_form">
          <input
            type="email"
            placeholder="Enter your email"
            size="30"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Enter your username"
            size="30"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            size="30"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Repeat password"
            size="30"
            required
            value={passwordRepeat}
            onChange={(e) => setpasswordRepeat(e.target.value)}
          ></input>
          <br />
          <button onClick={handleForm}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
