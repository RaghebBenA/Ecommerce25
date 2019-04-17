import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CarFields from "./carFields";
import FIELDS from "./formFields";
import _ from "lodash";

class CarForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ name, label }) => {
      return (
        <Field
          key={name}
          component={CarFields}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onCarCreate)}>
          {this.renderFields()}
          <Link to="/product">
            {" "}
            <Button
              style={{
                backgroundColor: "#EF9A9A",
                color: "#3949AB",
                fontWeight: "bold"
              }}
            >
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            style={{
              backgroundColor: "#EEFF41",
              color: "#3949AB",
              fontWeight: "bold"
            }}
            className="float-right"
          >
            Next
          </Button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "carForm",
  destroyOnUnmount: false
})(CarForm);
