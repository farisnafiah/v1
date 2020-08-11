import React from 'react';
import {Row, Col} from "reactstrap";
import './About.css';

function Hero(props) {
  return (
    <div className="sectionDiv" id="About">
      <Row>
        <Col>
          <h3 className="sectionHeader">{props.data.sectionHeader}</h3>
        </Col>
      </Row>
      <Row>
      <Col lg="7" className="section__About-skillColumn">
        <p>{props.data.aboutMe1}</p>
        <p>{props.data.aboutMe2}</p>
        <p>{props.data.aboutMe3}</p>
        <p>{props.data.techHeader}</p>
        <ul className="section__About-ul">
        {
          props.data.technologies.map((technology) =>
            (<li className="section__About-li">{technology}</li>)
          )
        }
        </ul>
      </Col>
      <Col lg="5" className="d-flex align-items-center justify-content-center" >
        <img className="section__About-profilePic" src={process.env.PUBLIC_URL + '/profile-picture.png'} alt="profile"/>
      </Col>
      </Row>
    </div>
  );
};

export default Hero;
