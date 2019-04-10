import React, { Component } from "react";
import { fetchOneCar } from "../redux/actions";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";

class CarDetails extends Component {
  componentDidMount() {
    this.props.fetchOneCar(this.props.match.params.carId);
  }

  render() {
    const { name, price, image } = this.props.Onecar;
    return (
      <React.Fragment>
        <h1>The car CarDetails</h1>
        <Container className="border border-secondary">
          <Row>
            <Col sm={4}>
              <img
                src={image}
                alt={name}
                style={{ width: "200px", height: "200px" }}
              />
            </Col>
            <Col sm={8}>
              <h2>{name}</h2>
              <h4>{price}</h4>
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
