import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";
import { Total, Purchase } from "./PurchaseStructure";
import { connect } from "react-redux";
import {
  postPurchase,
  addTopurchase,
  deletePurchase,
  deleteAllPurchase,
  decrementCount,
  resetCount
} from "../redux/actions";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const Purchaselist = ({
  postPurchase,
  auth,
  history,
  listPurchase,
  deletePurchase,
  deleteAllPurchase,
  decrementCount,
  resetCount
}) => {
  const [sold, setEmpty] = useState([]);
  useEffect(() => {
    setEmpty(listPurchase.arr);
  }, []);
  let prices = [];
  let total = 0;
  const Mapping = sold.map(({ _id, name, price, image, Carvin }) => {
    prices.push({ price });
    total = Total(prices);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        key={_id}
      >
        <h1
          style={{
            color: "white",
            alignItems: "center"
          }}
        >
          the {name} Details
        </h1>
        <div
          style={{ marginBottom: "10px" }}
          className="d-flex justify-content-center"
        >
          <Row
            style={{
              border: "none",
              boxShadow: " 25px 28px 36px 17px rgba(0,0,0,0.78)",
              maxWidth: "600px"
            }}
            className="d-flex m-2 cl"
          >
            <Col
              className="mt-2"
              md={{ offset: 1 }}
              style={{
                maxWidth: "500px",
                background: "none"
              }}
            >
              <ReactImageMagnify
                style={{ boxShadow: "  -8px 44px 48px -16px rgba(0,0,0,0.4)" }}
                {...{
                  smallImage: {
                    alt: name,
                    isFluidWidth: true,
                    src: image
                  },
                  largeImage: {
                    src: image,
                    width: 1200,
                    height: 1000
                  },
                  lensStyle: { backgroundColor: "rgba(0,0,0,.6)" }
                }}
              />
            </Col>
            <Row>
              <Col style={{ color: "white" }} className="text-center">
                <h2 className="mt-1"> Name: {name}</h2>
                <h3 className="mb-3">Price: {price}</h3>
                <h4 className="mb-3">Carvin: {Carvin}</h4>
                <h5 className="mb-3">Description:</h5>{" "}
                <p className="mb-3" style={{ objectFit: "contain" }}>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>
              </Col>
            </Row>
            <Button
              onClick={() => {
                deletePurchase(_id);
                decrementCount()
              }}
              className="float-left"
            >
              Delete
            </Button>
          </Row>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {Mapping}
        {total !== 0 ? (
          <div
            className=" mt-3 ml-5 justify-content-center "
            style={{
              maxWidth: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h1 style={{ color: "white" }}>Total: {total}</h1>
            <Button.Group>
              <Button
                size="small"
                onClick={() => {
                  deleteAllPurchase(listPurchase);
                  resetCount()
                }}
              >
                Cancel
              </Button>

              <Button.Or />
              <Button
                size="small"
                onClick={() => {
                  postPurchase(Purchase(sold, total, auth), history);
                  setTimeout(() => {
                    deleteAllPurchase(listPurchase);
                  }, 2000);
                }}
              >
                Buy Now
              </Button>
            </Button.Group>
          </div>
        ) : (
          <h1 style={{ color: "white" }}>Buy something first !</h1>
        )}
      </div>
    </div>
  );
};

function mapSatateToProps({ auth, listPurchase }) {
  return { auth, listPurchase };
}

export default connect(
  mapSatateToProps,
  { postPurchase, addTopurchase, deletePurchase, deleteAllPurchase,decrementCount,resetCount }
)(withRouter(Purchaselist));
