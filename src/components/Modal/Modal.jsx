import React from "react";
import ReactDOM from "react-dom";
import close from "/src/assets/icon-close.svg";
import rules from "/src/assets/image-rules.svg";
import "/src/components/Modal/modal.css";

const Modal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="Close" srcSet="" />
          </button>
        </div>
        <img src={rules} alt="Rules" srcSet="" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
