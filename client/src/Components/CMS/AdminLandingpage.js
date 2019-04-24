import React, { Component } from "react";
import _ from "lodash";

class AdminPage extends Component {
  renderNames() {
    return _.map(this.props.Cars, ({ name, _id }) => {
      return (
        <div
          key={_id}
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px",
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
      <div className="container">
        <div
          style={{
            border: "none",
            boxSahdow: " 2px 1px 24px 24px rgba(230,230,230,1)",
            borderRadius: "5px",
            maxWidth: "400px",
            backgroundColor: "white",
            paddingLeft: "10px"
          }}
        >
          <div className="row aling-items-start">
            <h3 style={{paddingLeft: "10px"}}>Cars</h3>
            </div>
            <div className="row aling-items-center">
            <h4 style={{paddingLeft: "10px"}}>Cars Number: {this.props.Cars.length}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
