import React, { Component } from "react";
import { fetchOneCar } from "../redux/actions";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

class CarDetails extends Component {
  componentDidMount() {
    this.props.fetchOneCar(this.props.match.params.carId);
  }

  render() {
    const { name, price, image, Carvin } = this.props.Onecar;
    return (
      <React.Fragment>
        <h1>the {name} Details</h1>
        <Container style={{marginBottom:'10px'}}>
          <Row style={{
            border: "solid 2px black ", 
            maxWidth:"600px",
          }}
          className="d-flex m-2 cl"
          >
            <Col className="mr-auto p-2" >
              <img width={250} height={250} alt={name} src={image} />
            </Col>
            <Col  >
              <h1> Name: {name}</h1>
              <h3>Price: {price}</h3>
              <h4>Carvin: {Carvin}</h4>
              <p>
            <h5>Description:</h5>  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus.
            </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToprops = ({ Onecar }) => ({ Onecar });

export default connect(
  mapStateToprops,
  { fetchOneCar }
)(CarDetails);
