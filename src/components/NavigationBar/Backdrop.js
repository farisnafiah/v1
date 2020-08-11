import React from "react";
import "./Backdrop.css";

function Backdrop(props) {

  return (
    <div className="backdrop">

      <div className="appSideDrawer__div">
        <ul className="appSideDrawer__ul">
        <li>
          <a href="/#About" className="appSideDrawer__item">About</a>
        </li>
        <li>
          <a href="/#Work" className="appSideDrawer__item">Work Experience</a>
        </li>
        <li>
          <a href="/#Academic" className="appSideDrawer__item">Academic</a>
        </li>
        <li>
          <a href="/#Contact" className="appSideDrawer__item">Contact</a>
        </li>
        </ul>

        <button className="appSideDrawer__resume">Resume</button>
      </div>

    </div>
  );
};

export default Backdrop;
