import { loginFailure, loginStart, loginSucces } from "../redux/userRedux";
import axios from "axios";

export const login = async (dispatch, user, setIsOpen) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", user);
    dispatch(loginSucces(res.data));
    setIsOpen(false);
  } catch (err) {
    dispatch(loginFailure());
    // alert("Something went wrong..Try again!")
  }
};

export const signUp = async (
  dispatch,
  user,
  changeTypeToLogIn,
  confirmPassword
) => {
  if (user.password !== confirmPassword.value) {
    return dispatch(loginFailure());
  }
  dispatch(loginStart());
  try {
    await axios.post("http://localhost:3001/api/auth/register", user);
    dispatch(loginSucces());
    changeTypeToLogIn();
  } catch (err) {
    dispatch(loginFailure());
    // alert("Something went wrong..Try again!")
  }
};
