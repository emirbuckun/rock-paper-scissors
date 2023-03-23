import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src="../assets/icon-close.svg" alt="Close" srcSet="" />
          </button>
        </div>
        <img src="../assets/image-rules.svg" alt="Rules" srcSet="" />
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
