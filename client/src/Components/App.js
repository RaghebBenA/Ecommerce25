import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";
import Header from "./Header";
import LandingPage from "./Landingpage";
import "./Style.css";

const Products = () => <h2>Products</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fecthUser();
  }
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With google</a>
          </li>
        );
      default:
        return (
          <Navbar.Text style={{ color: "white" }}>
         
            Signed in as: {this.props.auth.User}
          </Navbar.Text>
        );
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="bg-image">
          <Header renderContent={this.renderContent()} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/product" component={Products} />
        </div>
      </BrowserRouter>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
