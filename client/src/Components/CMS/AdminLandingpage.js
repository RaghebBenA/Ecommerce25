import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import _ from "lodash";

class AdminPage extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }
  renderNames() {
    return _.map(this.props.Cars, ({ name,_id }) => {
      return (
        <div 
        key={_id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white"
          }}
        >
          <h3>{name}</h3>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>AdminPage</h1>
        {this.renderNames()}
      </div>
    );
  }
}

const mapStateToProps = ({ Cars }) => ({ Cars });

export default connect(
  mapStateToProps,
  actions
)(AdminPage);
