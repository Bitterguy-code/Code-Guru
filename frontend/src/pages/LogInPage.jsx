import "./login.css";
import { useState } from "react";

export default function LogInPage() {
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
    <div className="login_container">
      <form className="login_form">
        <input
          type="text"
          placeholder="Email/Username"
          size="30"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button onClick={handleForm}>Log In</button>
      </form>
    </div>
  );
}
