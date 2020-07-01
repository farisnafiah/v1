import React, {useState} from "react";
import "./AppNavbar.css";
import DrawerToggleButton from "../Backdrop/DrawerToggleButton"
import Backdrop from "../Backdrop/Backdrop";
import { CSSTransition } from 'react-transition-group';

function AppNavbar(props) {

  const [backdropOpen, setBackdropOpen] = useState(false);

  const handleClickDrawerToggleButton = () => {
    setBackdropOpen(prevState => !prevState);
  };

  return (
    <div>
      <header>
      <nav className="appNavbar">

        <div className="appNavbar__logo">
          <a className="appNavbar__logo-item" href="/#">FN</a>
        </div>

        <div className="appNavbar__toggle-button">
          <DrawerToggleButton onClick={handleClickDrawerToggleButton}/>
        </div>

        <div className="appNavbar__navigation">
          <ol id="nav" className="appNavbar__ol">
            <li className="appNavbar__list">
              <a href="/#" className="appNavbar__item">About</a>
            </li>
            <li className="appNavbar__list">
              <a href="/#" className="appNavbar__item">Academic</a>
            </li>
            <li className="appNavbar__list">
              <a href="/#" className="appNavbar__item">Work Experience</a>
            </li>
            <li className="appNavbar__list">
              <a href="/#" className="appNavbar__item">Contact</a>
            </li>
          </ol>

          <button className="appNavbar__button">Resume</button>
        </div>

      </nav>
      </header>

      <CSSTransition in={backdropOpen} timeout={2000} classNames="fade" unmountOnExit>
        <Backdrop onCLickCloseBtn={handleClickDrawerToggleButton} backdropOpen={backdropOpen}/>
      </CSSTransition>

    </div>
  );
};

export default AppNavbar;
