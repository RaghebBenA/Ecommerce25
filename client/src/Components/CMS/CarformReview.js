import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../redux/actions";
import { withRouter } from "react-router-dom";
import FIELDS from "./formFields";

const CarformReview = ({ onCancel, formValues, postCar, history }) => {
  const reviewFrom = _.map(FIELDS, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h2>Plese confirm your entries</h2>
      {reviewFrom}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => postCar(formValues, history)}>Save the Car</button>
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
