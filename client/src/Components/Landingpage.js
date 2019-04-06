import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import _ from "lodash";
import { DISPLAYCARS } from "./carouselDisplay";

class LandingPage extends Component {


  renderContent() {
    return _.map(DISPLAYCARS, (Cars) => {
      return (
        <Carousel.Item style={{ maxHeight: "300px" }} key={Cars.car}>
          <img
            className="d-block"
            src={Cars.car}
            alt="first slide"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{Cars.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }
  render() {
    return (
      <div className="landingPage" style={{ color: "white" }}>
        <Row>
          <Col md={6}>
            <h1> The best Cars are here </h1>
            <h3>
              Welcome Ecommerce25 Everyone need a car in nowadays here we have
              all the types and all the taste so i think you will find your
              wanted car here
            </h3>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Carousel>{this.renderContent()}</Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}



export default LandingPage
