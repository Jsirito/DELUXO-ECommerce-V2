import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBarContext } from "../../components/navBar/navBarContext";
import useInput from "../../hooks/useInput";
import { signUp } from "../../redux/apiCalls";
import "./SignUp.css";

function SignUp() {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const { changeTypeToLogIn } = useContext(NavBarContext);

  const username = useInput();
  const email = useInput();
  const password = useInput();
  const confirmPassword = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(
      dispatch,
      {
        username: username.value,
        email: email.value,
        password: password.value,
      },
      changeTypeToLogIn,
      confirmPassword
    );
  };

  return (
    <div className="container">
      <div className="signUpContainer">
        <div className="title">SignUp</div>
        <form onSubmit={handleSubmit}>
          <div className="userDetailsContainer">
            <div className="inputBox">
              <span className="details">User Name</span>
              <input type="text" required {...username} />
            </div>
            <div className="inputBox">
              <span className="details">Email</span>
              <input type="text" required {...email} />
            </div>
            <div className="inputBox">
              <span className="details">Password</span>
              <input
                type="password"
                placeholder="At least 6 characters"
                required
                {...password}
              />
            </div>
            <div className="inputBox">
              <span className="details">Confirm Password</span>
              <input type="password" required {...confirmPassword} />
              {error && <div className="error">Something went wrong...</div>}
            </div>
          </div>

          <button className="button" type="submit" disabled={isFetching}>
            Go!
          </button>
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
