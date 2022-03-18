import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBarContext } from "../../components/navBar/navBarContext";
import useInput from "../../hooks/useInput";
import { login } from "../../redux/apiCalls";
import "./LogIn.css";

function LogIn({onClose}) {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const { changeTypeToSignUp, setIsOpen } = useContext(NavBarContext);
  const username = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password }, setIsOpen);
  };

  return (
    <div className="container">
      <div className="signUpContainer">
        <div className="title">LogIn</div>
        <form onSubmit={handleSubmit} disabled={isFetching}>
          <div className="userDetailsContainer">
            <div className="inputBox">
              <span className="details">UserName</span>
              <input type="text" required {...username} />
            </div>
            <div className="inputBox">
              <span className="details">Password</span>
              <input type="password" required {...password} />
              {error && <div className="error" >Something went wrong...</div>}
            </div>
          </div>
          <button className="button" type="submit" disabled={isFetching}>
            Go!
          </button>
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
