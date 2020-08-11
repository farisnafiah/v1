import React from "react";
import "./Addenda.css";

function Addenda(props) {

  return (
    <footer>
      <div>
      <ul className="footer__list">
        <li><a href="https://github.com/farisnafiah"><i class="fab fa-github-square"></i></a></li>
        <li><a href="https://www.linkedin.com/in/farisnafiah/"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://www.researchgate.net/profile/Faris_Nafiah2"><i class="fab fa-researchgate"></i></a></li>
      </ul>
      </div>
      <div>
        <p>Design inspired by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="footer__inspiration">Brittany Chiang</a></p>
        <p>Built from scratch by <span >Faris Nafiah</span></p>
      </div>
    </footer>
  );
};

export default Addenda;
