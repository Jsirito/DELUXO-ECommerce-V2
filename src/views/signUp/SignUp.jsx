import { useRef, useState, useContext } from "react";
import { NavBarContext } from "../../components/navBar/navBarContext";
import "./SignUp.css";

function SignUp() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {changeTypeToLogIn} = useContext(NavBarContext)


  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <div className="container">
      <div className="signUpContainer">
        <div className="title">SignUp</div>
        <form>
          <div className="userDetailsContainer">
            <div className="inputBox">
              <span className="details">User Name</span>
              <input
                type="text"
                ref={userNameRef}
                required
              />
            </div>
            <div className="inputBox">
              <span className="details">Email</span>
              <input
                type="text"
                ref={emailRef}
                required
              />
            </div>
            <div className="inputBox">
              <span className="details">Password</span>
              <input
                type="password"
                ref={passwordRef}
                placeholder="At least 6 characters"
                required
              />
            </div>
            <div className="inputBox">
              <span className="details">Confirm Password</span>
              <input
                type="password"
                ref={confirmPasswordRef}
                required
              />
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

          <a className="alreadyAccount" onClick={changeTypeToLogIn}>
            Already have an account? LogIn
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
