import React, {useState} from "react";
import "./AppNavbar.css";
import Backdrop from "./Backdrop";
import { CSSTransition } from 'react-transition-group';

// import resume from "../../public/FN-icon2.png";

function AppNavbar(props) {

  const [backdropOpen, setBackdropOpen] = useState(false);

  const handleClickDrawerToggleButton = () => {
    setBackdropOpen(prevState => !prevState);
  };

  return (
    <header>
      <nav className="appNavbar">

        <div className="appNavbar__logo">
          <a className="appNavbar__logo-item" href="/#">FN</a>
        </div>

        <div className="appNavbar__toggle-button">
          <button className="toggle-button" onClick={handleClickDrawerToggleButton} >
            <CSSTransition in={backdropOpen} timeout={5000} classNames="HamburgerRotateIntoCrossA">
            <div className="toggle-button__line a" />
            </CSSTransition>
            <CSSTransition in={backdropOpen} timeout={5000} classNames="HamburgerRotateIntoCrossB">
            <div className="toggle-button__line b" />
            </CSSTransition>
            <CSSTransition in={backdropOpen} timeout={5000} classNames="HamburgerRotateIntoCrossC">
            <div className="toggle-button__line c" />
            </CSSTransition>
          </button>
        </div>

        <div className="appNavbar__navigation">
          <ol id="nav" className="appNavbar__ol">
            <li className="appNavbar__list">
              <a href="/#About" className="appNavbar__item">About</a>
            </li>
            <li className="appNavbar__list">
              <a href="/#Work" className="appNavbar__item">Work Experience</a>
            </li>
            <li className="appNavbar__list">
              <a href="/#Academic" className="appNavbar__item">Academic</a>
            </li>
            <li className="appNavbar__list">
              <a href="/#Contact" className="appNavbar__item">Contact</a>
            </li>
          </ol>

          <button className="appNavbar__button"><a className="appNavbar__button-a" href={process.env.PUBLIC_URL+"/FarisNafiah_CV.pdf"} download="FarisNafiah_CV.pdf">Resume</a></button>
        </div>

      </nav>

      <CSSTransition in={backdropOpen} timeout={2000} classNames="opa" unmountOnExit>
        <Backdrop onCLickCloseBtn={handleClickDrawerToggleButton} backdropOpen={backdropOpen}/>
      </CSSTransition>

    </header>
  );
};

export default AppNavbar;
