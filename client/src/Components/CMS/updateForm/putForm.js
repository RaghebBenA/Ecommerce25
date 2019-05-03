import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import CarFields from "./updateFields";
import * as actions from "../../../redux/actions";
import {Icon,Button} from "semantic-ui-react"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class UpdateCar extends Component {
  renderFields() {
    const { name, value } = this.props.car;
    return (
      <div>
        <Field
          key={name}
          component={CarFields}
          type="text"
          name={name}
          values={value}
        />
      </div>
    );
  }
  render() {
    return (
      <div className="container ">
        <form
          onSubmit={this.props.handleSubmit((values) =>
            this.props.updateOneCar(
              this.props.carId,
              values,
              this.props.history
            )
          )}
        >
          {this.renderFields()}
         <Button.Group size="mini">
          <Link to={`/rootlist/${this.props.carId}`}>
        <Button  >
            <Icon
            name="cancel"
            size="small"
            /> 
            </Button>
          </Link>
          <Button type="submit">
        <Icon
        name="check"
        size="small"
        />
        </Button>
        </Button.Group>
        </form>
      </div>
    );
  }
}
UpdateCar = reduxForm({
  form: "updateform"
})(UpdateCar);

export default connect(
  null,
  actions
)(withRouter(UpdateCar));
