import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import _ from "lodash";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./Header";
import LandingPage from "./Landingpage";
import Purchaselist from "./PurchaseList";
import "./Style.css";
import Loading from "./Loader";
import CarDetails from "./CarDetails";
import Products from "./CMS/Product";
import CarNew from "./CMS/NewCar";

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
    return _.map(this.props.Cars, ({ name, _id, price, image, carMaker }) => {
      return (
        <div className="cont" key={_id}>
          <div className="card-cont">
            <div className="cards">
              <figure className="front">
                <img alt="img"  className="carImg"  src={image}  />
                <h1>{name}</h1>
                <p>{carMaker}</p>
              </figure>
              <figure className="back">
                <h1>{price}</h1>
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
              </figure>
            </div>
          </div>
        </div>
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
          <Nav style={{ justifyContent: "space-around" }}>
            <Nav.Item>
              <NavLink to={`/product`}>Product</NavLink>{" "}
              <NavLink
                to="/purchase"
                style={{ textDecoration: "none", fontSize: "12px" }}
              >
                <button
                  className="btn  btn-sm"
                  style={{ backgroundColor: "#FFF8E1" }}
                >
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
      <div>
        <Header renderContent={this.renderContent()} />
        <Route
          render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key}  classNames="page" timeout={300}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => <Homepage Cars={this.props.Cars} />}
                  />
                  <Route exact path="/product" component={() => <Products />} />
                  <Route
                    exact
                    path="/purchase"
                    component={() => (
                      <Purchaselist soldCars={this.state.purchase} />
                    )}
                  />
                  <Route exact path="/product/:carId" component={CarDetails} />
                  <Route exact path="/New" component={CarNew} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
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
