import { loginFailure, loginStart, loginSucces } from "../redux/userRedux";
import axios from "axios";

export const login = async (dispatch, user, setIsOpen) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3001/api/auth/login", user);
    dispatch(loginSucces(res.data));
    setIsOpen(false)
  } catch (err) {
    dispatch(loginFailure());
  }
};
