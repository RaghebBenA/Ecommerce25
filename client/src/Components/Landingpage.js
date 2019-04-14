import React, { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import _ from "lodash";
import { DISPLAYCARS } from "./carouselDisplay";

class LandingPage extends Component {
  state = { activeItemIndex: 0 };
  renderContent() {
    return _.map(DISPLAYCARS, (Cars) => {
      return (
        <Carousel.Item style={{ maxHeight: "300px" }} key={Cars.car}>
          <img
            className="d-block"
            src={Cars.car}
            alt="first slide"
            style={{
              maxHeight: "300px",
              minWidth: "600px",
              objectFit: "cover"
            }}
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
      <div style={{ backgroundColor: "#3949AB" }}>
        <Row >
          <Col md={{ span: 4, offset: 4 }} className="mt-1 Colcar">
            <Carousel className="carsoule">{this.renderContent()}</Carousel>
          </Col>
        </Row>

        <Row
          className="mt-1 mx-auto  theCars "
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {this.props.renderCars}
        </Row>
      
      </div>
    );
  }
}

export default LandingPage;
