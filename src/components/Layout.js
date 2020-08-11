import React from 'react';
import './Layout.css';
import AppNavbar from "./NavigationBar/AppNavbar";
import Addenda from "./Addenda/Addenda";
import LeftSocial from "./LeftSocial/LeftSocial";
import {Container} from 'reactstrap';

function Layout(props) {
  return (
    <div style={{backgroundColor:"#0a192f"}}>
    <AppNavbar/>
    <main>
    <Container className="main-container" fluid="sm" style={{padding: 0}}>
      {props.children}
    </Container>
    </main>
    <LeftSocial />
    <Addenda />
    </div>
  );
};

export default Layout;
