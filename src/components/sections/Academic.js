import React from "react";
import {Row, Col} from "reactstrap";

import './Academic.css';

function Academic(props) {

  return (
    <div className="sectionDiv " id="Academic">
    <div style={{maxWidth: "700px", margin: "0 auto"}}>
      <Row>
        <Col>
          <h3 className="sectionHeader">{props.data.sectionHeader}</h3>
        </Col>
      </Row>
      <Row className="jumbo__container">
      {props.data.edus.map((data, index) => (
        <Col sm="4" className="jumbo__main-col">
          <div className="jumbo__primary-div">
            <span class="helper"></span>
            <img src={data.image} alt="Logo" className="jumbo__logo" />
          </div>
          <div className="jumbo__secondary-div"></div>
          <h1 className="jumbo__content">{data.university}</h1>
          <h4 className="jumbo__content jumbo__sub1">{data.location}</h4>
          <span className="jumbo__content jumbo__hr1">&nbsp;</span>
          <h3 className="jumbo__content">{data.course}</h3>
          <h4 className="jumbo__content jumbo__sub2">{data.duration}</h4>
          <span className="jumbo__content jumbo__hr2">&nbsp;</span>
          <p className="jumbo__content" style={{ color: "#a8b2d1" }}>
            {data.details}
          </p>
        </Col>
      ))}
    </Row>
    </div>
    </div>
  );
};

export default Academic;
