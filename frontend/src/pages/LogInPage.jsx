import "./login.css";
import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { userLogIn } from "../utilities";

export default function LogInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const user = await userLogIn(username, password);
    if (user) {
      setUser(user);
      navigate("/playground");
    }
    console.log("click test")
  };
  return (
    <div className="login_container" onSubmit={handleForm}>
      <form className="login_form">
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
