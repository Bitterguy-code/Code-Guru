import "./signup.css";
import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
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
            placeholder="Email"
            size="30"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            placeholder="Username"
            size="30"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Password"
            size="30"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            size="30"
            required
            value={passwordConfirm}
            onChange={(e) => setpasswordConfirm(e.target.value)}
          ></input>
          <br />
          <button onClick={handleForm}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
