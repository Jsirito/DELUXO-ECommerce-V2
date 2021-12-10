import { useState, useRef, useContext } from "react";
import { NavBarContext } from "../../components/navBar/navBarContext";
import "./LogIn.css";

function LogIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {changeTypeToSignUp} = useContext(NavBarContext)

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="container">
      <div className="signUpContainer">
        <div className="title">LogIn</div>
        <form>
          <div className="userDetailsContainer">
            <div className="inputBox">
              <span className="details">Email</span>
              <input type="text" ref={emailRef} required />
            </div>
            <div className="inputBox">
              <span className="details">Password</span>
              <input type="password" ref={passwordRef} required />
              {error && <div className="inputError">{error}</div>}
            </div>
          </div>
          <input
            disabled={loading}
            className="button"
            type="submit"
            value="Go!"
          />
          <br />
          <br />

          <a className="alreadyAccount" onClick={changeTypeToSignUp}>
            Need new account? Register
          </a>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
