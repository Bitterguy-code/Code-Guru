import "./signup.css";

export default function SignUpPage() {
  return (
    <div className="signup_container">
      <div className="signup_left"></div>
      <div className="signup_right">
          <form className="signup_form">
            <input type="text" placeholder="Enter your email" size="30"></input><br/>
            <input type="text" placeholder="Enter your username" size="30"></input><br/>
            <input type="password" placeholder="Enter password" size="30"></input><br/>
            <input type="password" placeholder="Repeat password" size="30"></input><br/>
            <button>Sign Up</button>
          </form>
      </div>
    </div>
  );
}
