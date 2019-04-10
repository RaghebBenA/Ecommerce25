import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Navbar, Nav, Card } from "react-bootstrap";
import _ from "lodash";
import Header from "./Header";
import LandingPage from "./Landingpage";
import Purchaselist from "./PurchaseList";
import "./Style.css";
import Loading from "./Loader";
import CarDetails from "./CarDetails";
import Products from "./Product"




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { purchase: [], count: [] };
  }

  componentDidMount() {
    this.props.fecthUser();
    this.props.fetchCars();
  }

  renderCars() {
    return _.map(this.props.Cars, ({ name, _id, price, image }) => {
      return (
        <Card
          style={{ width: "18rem", padding: "10px" }}
          className="text-center mt-1 ml-1"
          key={_id}
          bg="secondary"
        >
          <Card.Img variant="top" src={image} />

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>
              {price}{" "}
              <button
                className="btn btn-light"
                style={{ borderRadius: "50%" }}
                onClick={() => {
                  this.setState = {
                    purchase: this.state.purchase.push({
                      name,
                      _id,
                      price,
                      image
                    })
                  };
                }}
              >
                <i className="medium material-icons">local_grocery_store</i>
              </button>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      );
    });
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login With google</a>;
      default:
        return (
          <Nav>
            <Nav.Item>
            <NavLink to={`/product`}>
            Product
            </NavLink>{" "}
              <NavLink
                to="/purchase"
                style={{ textDecoration: "none", fontSize: "12px" }}
              >
                <button className="btn btn-success btn-sm">
                  Purchase
                  <i className="small material-icons">
                    local_grocery_store
                  </i>{" "}
                </button>
              </NavLink>{" "}
              <Navbar.Text style={{ color: "white" }}>
                Signed in as: {this.props.auth.User}
              </Navbar.Text>
            </Nav.Item>
          </Nav>
        );
    }
  }

  render() {
    const Homepage = ({ Cars }) => {
      if (!Cars.length) {
        return <Loading />;
      }
      return <LandingPage renderCars={this.renderCars()} />;
    };
    return (
      <BrowserRouter>
        <Header renderContent={this.renderContent()} />
        <Route
          exact
          path="/"
          component={() => <Homepage Cars={this.props.Cars} />}
        />
        <Route exact path="/product" component={()=><Products Cars={this.props.Cars} />} />
        <Route
          exact
          path="/purchase"
          component={() => <Purchaselist soldCars={this.state.purchase} />}
        />
        <Route exact path="/product/:carId" component={CarDetails} />
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth, Cars }) {
  return { auth, Cars };
}

export default connect(
  mapStateToProps,
  actions
)(App);