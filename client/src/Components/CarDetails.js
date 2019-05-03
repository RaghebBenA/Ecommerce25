import React, { Component } from "react";
import { fetchOneCar,addTopurchase } from "../redux/actions";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";
import audi from "../Asset/audi.jpg";
import { FadeTransform } from "react-animation-components";

class CarDetails extends Component {
  state = {
    img: audi,
    purchase: []
  };
  componentDidMount() {
    this.props.fetchOneCar(this.props.match.params.carId);
    this.props.addTopurchase()
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Onecar !== nextProps.Onecar) {
      this.setState({
        img: nextProps.Onecar.image
      });
    }
  }
  render() {
    const { img } = this.state;
    const { name, price, Carvin } = this.props.Onecar;
    console.log(this.props.listPurchase,this.state.purchase)
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
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: name,
                  isFluidWidth: true,
                  src: img
                },
                largeImage: {
                  src: img,
                  width: 1200,
                  height: 450
                },
                lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }
              }}
            />
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
              <Button
              onClick={() => {
                this.setState((prevState) => ({
                  purchase: [
                    ...prevState.purchase,
                    this.props.Onecar
                  ],
                }));
            
              }}
                className="float-right"
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </div>
      </FadeTransform>
    );
  }
}

const mapStateToprops = ({ Onecar,listPurchase }) => ({ Onecar,listPurchase });

export default connect(
  mapStateToprops,
  { fetchOneCar,addTopurchase }
)(CarDetails);
