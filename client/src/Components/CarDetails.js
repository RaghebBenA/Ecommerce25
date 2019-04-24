import React, { Component } from "react";
import { fetchOneCar } from "../redux/actions";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";
import audi from "../Asset/audi.jpg";
import { FadeTransform } from "react-animation-components";

class CarDetails extends Component {
  componentDidMount() {
    this.props.fetchOneCar(this.props.match.params.carId);
  }
  renderimg() {
    const { name, image } = this.props.Onecar;
    if (!this.props.Onecar) {
      return (
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: name,
              isFluidWidth: true,
              src: audi
            },
            largeImage: {
              src: audi,
              width: 1200,
              height: 450
            },
            lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }
          }}
        />
      );
    } else {
      return (
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
              height: 450
            },
            lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }
          }}
        />
      );
    }
  }
  render() {
    const { name, price, Carvin } = this.props.Onecar;
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)"
        }}
        className="container "
      >
        <h1 className="text-white">the {name} Details</h1>
        <div
          style={{
            marginBottom: "10px",
            height: "100%"
          }}
          className="d-flex justify-content-center"
        >
          <Card style={{ width: "25rem" }} className="text-center">
            {this.renderimg()}
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>{price}</Card.Subtitle>
              <p>{Carvin}</p>
              <Card.Text>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus
              </Card.Text>
            </Card.Body>
          </Card>
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
