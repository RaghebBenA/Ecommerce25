import React, { Component } from "react";
import { fetchOneCar } from "../redux/actions";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";
import { FadeTransform } from 'react-animation-components'

class CarDetails extends Component {
  componentDidMount() {
    this.props.fetchOneCar(this.props.match.params.carId);
  }

  render() {
    const { name, price, image, Carvin } = this.props.Onecar;
    return (
      <FadeTransform in
                transformProps={{
                    exitTransform: "scale(0.5) translateY(-50%)"
                }}>
        <h1>the {name} Details</h1>
        <div
          style={{ marginBottom: "10px" }}
          className="d-flex justify-content-center"
        >
          <Row
            style={{
              border: "solid 2px black ",
              maxWidth: "600px"
            }}
            className="d-flex m-2 cl"
          >
            <Col className="mr-auto p-2" style={{ maxWidth: "500px" }}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: name,
                    isFluidWidth: true,
                    src: image
                  },
                  largeImage: {
                    src: image,
                    width: 1200,
                    height: 1800
                  },
                  lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }
                }}
              />
            </Col>
            <Row>
              <Col style={{ color: "white" }} className="text-center">
                <h1> Name: {name}</h1>
                <h3>Price: {price}</h3>
                <h4>Carvin: {Carvin}</h4>
                <p>
                  <h5>Description:</h5> Cras sit amet nibh libero, in gravida
                  nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                  Cras purus odio, vestibulum in vulputate at, tempus viverra
                  turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                  Donec lacinia congue felis in faucibus.
                </p>
              </Col>
            </Row>
          </Row>
        </div>
      </FadeTransform>
    );
  }
}

const mapStateToprops = ({ Onecar }) => ({ Onecar });

export default connect(
  mapStateToprops,
  { fetchOneCar }
)(CarDetails);
