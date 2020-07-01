import React from 'react';
import './DrawerToggleButton.css';

function drawerToggleButton(props) {

  return (
    <button className="toggle-button" onClick={props.onClick} >
      <div className="toggle-button__line a" />
      <div className="toggle-button__line b" />
      <div className="toggle-button__line c" />
    </button>
  );
};

export default drawerToggleButton;
