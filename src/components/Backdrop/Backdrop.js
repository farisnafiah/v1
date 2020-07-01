import React from "react";
import "./Backdrop.css";

function Backdrop(props) {

  return (
    <div className="backdrop">

      <div className="closebtn__div">
        <a href="/#" className="closebtn" onClick={props.onCLickCloseBtn}>&times;</a>
      </div>

      <div className="appSideDrawer__div">
        <ul className="appSideDrawer__ul">
        <li>
          <a href="/#" className="appSideDrawer__item">About</a>
        </li>
        <li>
          <a href="/#" className="appSideDrawer__item">Academic</a>
        </li>
        <li>
          <a href="/#" className="appSideDrawer__item">Work Experience</a>
        </li>
        <li>
          <a href="/#" className="appSideDrawer__item">Contact</a>
        </li>
        </ul>

        <button className="appSideDrawer__resume">Resume</button>
      </div>

    </div>
  );
};

export default Backdrop;
