import React, { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Emir Büçkün</a>.
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
