import "./login.css";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    //userLogin(email,password)
    //if(user) then navigate to some other page
  };
  return (
    <div className="login_container">
      <form className="login_form">
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
