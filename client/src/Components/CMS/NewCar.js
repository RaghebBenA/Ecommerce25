import React, { Component } from "react";
import CarForm from "./CarForm";
import {reduxForm} from "redux-form"
import CarformReview from "./CarformReview";

class CarNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <CarformReview onCancel={()=> this.setState({showFormReview:false})} />;
    }
    return <CarForm  onCarCreate={()=>this.setState({showFormReview:true})}/>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
    form: "carForm"
})(CarNew);
