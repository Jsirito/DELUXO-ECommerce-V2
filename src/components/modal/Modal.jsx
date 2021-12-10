import React from "react";
import ReactDOM from "react-dom";
import LogIn from "../../views/logIn/LogIn";
import SignUp from "../../views/signUp/SignUp";

import { OverlayContainer, ModalContainer } from "./ModalElemets";

function Modal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <OverlayContainer onClick={onClose} />
      <ModalContainer>
        {type === "logIn" ? <LogIn /> : <SignUp />}
      </ModalContainer>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
