import React from "react";
import "./LeftSocial.css"

function LeftSocial(props) {
  return (
    <div className="LS__main">
      <ul className="LS__list">
        <li><a href="https://github.com/farisnafiah"><i class="fab fa-github-square"></i></a></li>
        <li><a href="https://www.linkedin.com/in/farisnafiah/"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://www.researchgate.net/profile/Faris_Nafiah2"><i class="fab fa-researchgate"></i></a></li>
        <li><span>&nbsp;</span></li>
      </ul>
    </div>
  )
}

export default LeftSocial;
