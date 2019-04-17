import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../redux/actions";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Input } from "semantic-ui-react";
import FIELDS from "./formFields";

const CarformReview = ({ onCancel, formValues, postCar, history }) => {
  console.log(formValues);
  const reviewFrom = _.map(FIELDS, ({ label, name }) => {
    return (
      <div key={name}>
        <label
          style={{
            fontSize: "20px",
            marginBottom: "10px",
            color: "#EEFF41",
            fontWeight: "bold"
          }}
        >
          {label}
        </label>
        <Input
          fluid
          disabled
          value={formValues[name]}
          style={{ marginBottom: "5px" }}
        />
      </div>
    );
  });
  return (
    <div className="container">
      <h2 style={{ color: "white", fontWeight: "bold" }}>
        Plese confirm your entries
      </h2>
      {reviewFrom}
      <Button
        onClick={onCancel}
        className="btn-lg"
        style={{
          marginTop: "10px",
          backgroundColor: "#81D4FA",
          color: "black",
          fontWeight:"bold"
        }}
      >
        Back
      </Button>
      <Button
        style={{
          backgroundColor: "#B2DFDB",
          color: "black",
          fontWeight: "bold",
          marginTop: "10px",
       
        }}
        className="float-right"
        onClick={() => postCar(formValues, history)}
      >
        Save The Car
        <i className="material-icons right">done</i>
      </Button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.carForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(CarformReview));
