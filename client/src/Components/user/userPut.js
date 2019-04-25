import React from "react";
import UserFields from "./updateUserF";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { Button, Icon } from "semantic-ui-react";

let UpdateUser = ({
  handleSubmit,
  click,
  name,
  value,
  updateUser,
  UserId,
  history,
}) => {
  return (
    <div className="container">
      <form
        onSubmit={handleSubmit((values) => {
          updateUser(UserId, values, history);
        })}
      >
        <Field component={UserFields} type="text" name={name} values={value} />

        <Button.Group size="mini">
          <Button onClick={click}>
            <Icon name="cancel" size="small" />
          </Button>
          <Button type="submit">
            <Icon name="check" size="small" />
          </Button>
        </Button.Group>
      </form>
    </div>
  );
};

UpdateUser = reduxForm({
  form: "updateUser"
})(UpdateUser);

export default connect(
  null,
  actions
)(withRouter(UpdateUser));
