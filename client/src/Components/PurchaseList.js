import React from "react";
import { Row, Col } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";

const Purchaselist = ({ soldCars }) => {
  let prices = [];
  const Mapping = soldCars.map(({ _id, name, price, image, Carvin }) => {
    prices.push({ price });
    return (
      <React.Fragment key={_id} >
        <h1 style={{color: "white"   , justifyContent:"center",
        alignItems: "center"}}>the {name} Details</h1>
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
      </React.Fragment>
    );
  });

  return <div >{Mapping}</div>;
};

export default Purchaselist;
