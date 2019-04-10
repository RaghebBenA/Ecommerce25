import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class Products extends Component {
  renderCars() {
    return _.map(this.props.Cars, ({ name, _id, price, image }) => {
      return (
        <Card
          style={{ width: "18rem", padding: "10px" }}
          className="text-center mt-1 ml-1"
          key={_id}
          bg="secondary"
        >
          <Link to={`/product/${_id}`}>
            <Card.Img variant="top" src={image} />
          </Link>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{price}</Card.Subtitle>
          </Card.Body>
        </Card>
      );
    });
  }
  render() {
    return <React.Fragment>{this.renderCars()}</React.Fragment>;
  }
}

export default Products;
