import React from "react";
import {Row, Col, Button} from "reactstrap";

import './Contact.css';

function Contact(props) {

  return (
    <div className="sectionDiv section__Contact" id="Contact">

        <Row>
          <Col>
            <h3 className="sectionHeader">{props.data.sectionHeader}</h3>
          </Col>
        </Row>
        <Row className="section__Contact-information">
          <Col sm="9">
            <h1 className="section__Contact-title">Get In Touch</h1>
            <p className="section__Contact-subtitle">Whether it's a job offer, part-time work, freelancing, or you just want to say hi, my inbox always welcomes your email. I am currently open for opportunities as a researcher, NDT engineer or web developer. Let's have a chat! </p>
          </Col>
          <Col sm="3" className="contact__sayHiBtn-col">
            <Button className="SayHi-button" href="mailto:farisizzuddinnafiahhussin@gmail.com">Say Hi!</Button>
          </Col>
        </Row>

    </div>
  );
};

export default Contact;
