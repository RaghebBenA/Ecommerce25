import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button } from "react-bootstrap";
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
          <Button type="submit">Try</Button>
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
