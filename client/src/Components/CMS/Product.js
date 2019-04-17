import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";

class Products extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }
  renderCars() {
    return _.map(this.props.Cars, ({ name, _id, price, image }) => {
      return (
        <Card
          key={_id}
          style={{
            width: "18rem",
            padding: "10px",
            backgroundColor: "#FFF8E1"
          }}
          className="text-center mt-1 ml-1  car"
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
   
    return (
      <div>
        <h1>All The products of The sum: {this.props.Cars.length} </h1>
        <div className="container">
        
            <div className="d-flex justify-content-center product">
              {this.renderCars()}
            </div>
        
          <div className="fixed-action-btn">
            <Link to="/New">
              <Button animated floated="right" className="ml-1 mt-1">
                <Button.Content visible>New Car</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ Cars }) {
  return { Cars };
}

export default connect(
  mapStateToProps,
  actions
)(Products);
