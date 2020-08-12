import React from 'react';
import './Hero.css';
import {Button} from 'reactstrap';

function Hero(props) {
  return (
    <div className="sectionHero">
      <p>{props.data.title}</p>
      <h1>{props.data.name}</h1>
      <h3>{props.data.roles}</h3>
      <h5>{props.data.fields}</h5>

      <Button id="GetInTouch-button" href="mailto:farisizzuddinnafiahhussin@gmail.com">Get In Touch</Button>
    </div>
  );
};

export default Hero;
