import React, { Component } from "react";
import { fetchOneCar,  deleteOnecar } from "../../redux/actions";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import updateFields from "./updateForm/updateFormFields";
import ReactImageMagnify from "react-image-magnify";
import audi from "../../Asset/audi.jpg";
import UpdateCar from "./updateForm/putForm";
import { FadeTransform } from "react-animation-components";
import { Icon } from "semantic-ui-react";

class RootCarDetails extends Component {
  state = {
    fields: [],
    open: false,
    putprice: false,
    putvin: false,
    img: audi
  };
  componentDidMount() {
    this.props.fetchOneCar(this.props.match.params.carId);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.Onecar !== nextProps.Onecar){
      this.setState({
        img: nextProps.Onecar.image
      })
    }
  }
 
  render() {
  
    const { name, price, Carvin} = this.props.Onecar;
    const {img} = this.state
    let array = [];
    updateFields(this.props.Onecar, array);
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
              <Card.Title>
                {this.state.open ? (
                  <UpdateCar
                    car={this.state.fields}
                    carId={this.props.match.params.carId}
                  />
                ) : (
                  <div>
                    {name}
                    <Icon
                      name="pencil alternate"
                      size="small"
                      style={{ marginleft: "100%" }}
                      onClick={() => {
                        this.setState({ open: true, fields: array[0] });
                      }}
                    />
                  </div>
                )}
              </Card.Title>
              <Card.Subtitle>
                {this.state.putprice ? (
                  <UpdateCar
                    car={this.state.fields}
                    carId={this.props.match.params.carId}
                  />
                ) : (
                  <div>
                    {price}
                    <Icon
                      name="pencil alternate"
                      size="small"
                      style={{ marginleft: "100%" }}
                      onClick={() => {
                        this.setState({
                          putprice: true,
                          fields: array[3]
                        });
                      }}
                    />
                  </div>
                )}
              </Card.Subtitle>
              {this.state.putvin ? (
                <UpdateCar
                  car={this.state.fields}
                  carId={this.props.match.params.carId}
                />
              ) : (
                <div className="d-flex justify-content-center">
                  <p>{Carvin}</p>
                  <Icon
                    name="pencil alternate"
                    size="small"
                    style={{ marginleft: "100%" }}
                    onClick={() => {
                      this.setState({
                        putvin: true,
                        fields: array[4]
                      });
                    }}
                  />
                </div>
              )}
              <Card.Text>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus
              </Card.Text>

              <Button
                onClick={() => {
                  this.props.deleteOnecar(
                    this.props.match.params.carId,
                    this.props.history
                  );
                }}
                className="float-right"
              >
                delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      </FadeTransform>
    );
  }
}

const mapStateToprops = ({ Onecar,  CarRm }) => ({ Onecar, CarRm });

export default connect(
  mapStateToprops,
  { fetchOneCar ,deleteOnecar }
)(RootCarDetails);
