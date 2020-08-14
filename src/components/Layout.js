import React from 'react';
import MetaTags from 'react-meta-tags';
import './Layout.css';
import AppNavbar from "./NavigationBar/AppNavbar";
import Addenda from "./Addenda/Addenda";
import LeftSocial from "./LeftSocial/LeftSocial";
import {Container} from 'reactstrap';

function Layout(props) {
  return (
    <div style={{backgroundColor:"#0a192f"}}>
    <MetaTags>
      <title>Faris Nafiah</title>
      <meta name="description" content='"Welcome to wherever you are"-Bon Jovi.' />
      <meta property="og:title" content="Faris Nafiah's personal website" />
      <meta property="og:image" content={process.env.PUBLIC_URL + "/FN-webPreview.PNG"} />
    </MetaTags>
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
