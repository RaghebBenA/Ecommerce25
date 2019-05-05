import React, { Component } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Nav, Button, OverlayTrigger, Tooltip, Badge } from "react-bootstrap";
import { Dropdown, Divider } from "semantic-ui-react";
import _ from "lodash";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./Header";
import LandingPage from "./Landingpage";
import Purchaselist from "./PurchaseList";
import "./Style.css";
import Loading from "./Loader";
import CarDetails from "./CarDetails";
import Products from "./Product";
import CarNew from "./CMS/NewCar";
import AdminPage from "./CMS/AdminLandingpage";
import RootCarDetails from "./CMS/rootCarDetails";
import RootProducts from "./CMS/rootProudct";
import CurrentUser from "./CMS/Rootuser/user";
import PurchaseDashboard from "./CMS/purchaseDashboard";
import StateUser from "./user/user";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Admin: false,
      Id: 0,
      ui: null,
      Style: {
        backgroundColor: "#FFF8E1",
        color: "black"
      }
    };
  }

  componentDidMount() {
    this.props.fecthUser();
    this.props.fetchCars();
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.auth !== nextProps.auth) {
      this.setState({
        Admin: nextProps.auth["Admin"],
        Id: nextProps.auth["_id"],
        ui: nextProps.auth
      });
    }
  }

  renderCars() {
    return _.map(
      this.props.Cars,
      ({ name, _id, price, image, carMaker, Carvin }) => {
        return (
          <div className="cont" key={_id}>
            <div className="card-cont">
              <div className="cards">
                <figure className="front">
                  <img alt="img" className="carImg" src={image} />
                  <h1>{name}</h1>
                  <p>{carMaker}</p>
                </figure>
                <figure className="back">
                  <h1>${price}</h1>
                  {this.props.auth["address"] === "Address" ||
                  !this.props.auth ? (
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">
                          You should Login and fill your Account inforamation
                          first
                        </Tooltip>
                      }
                    >
                      <button
                        className="btn btn-light disabled"
                        style={{ borderRadius: "50%" }}
                      >
                        <i className="medium material-icons">
                          local_grocery_store
                        </i>
                      </button>
                    </OverlayTrigger>
                  ) : (
                    <button
                      className="btn btn-light"
                      style={{ borderRadius: "50%" }}
                      onClick={() => {
                        this.props.increamentCount();
                        this.props.addTopurchase({
                          name,
                          _id,
                          price,
                          image,
                          carMaker,
                          Carvin
                        });
                      }}
                    >
                      <i className="medium material-icons">
                        local_grocery_store
                      </i>
                    </button>
                  )}
                  <Divider horizontal>Or</Divider>
                  <Link to={`/product/${_id}`}>
                    <Button variant="info">More Details</Button>
                  </Link>
                </figure>
              </div>
            </div>
          </div>
        );
      }
    );
  }

  renderContent() {
    let COUNT = parseInt(Object.values(this.props.count));
    const id = this.state.Id;

    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" style={{ color: "white" }}>
            Login With google
          </a>
        );
      default:
        return (
          <Nav className="mr-5  ">
            {this.props.auth["Admin"] === true ? (
              <NavLink
                to={`/rootlist`}
                className="mr-3 mt-2 text-white"
                style={{ fontSize: "14px" }}
              >
                Product
              </NavLink>
            ) : (
              <NavLink
                to={`/product`}
                className="mr-3 mt-2 text-white"
                style={{ fontSize: "14px" }}
              >
                Product
              </NavLink>
            )}
            <NavLink
              to="/purchase"
              style={{
                textDecoration: "none",
                fontSize: "14px",
                color: "white"
              }}
              className="mr-3 mt-2"
            >
              <Badge
                style={{
                  backgroundColor: COUNT !== 0 ? "red" : "#FFF8E1",
                  color: COUNT !== 0 ? "white" : "black"
                }}
              >
                {parseInt(Object.values(this.props.count))}
              </Badge>
              Purchase
              <i className="small material-icons">local_grocery_store</i>{" "}
            </NavLink>
            <Dropdown
              text="Account"
              style={{ color: "white", marginTop: "7px" }}
            >
              <Dropdown.Menu direction="left">
                <Dropdown.Item>
                  <Link to={`/user/${id}`}>{this.props.auth.User} </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href="/api/logout"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Logout
                  </a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        );
    }
  }
  renderSidenav(style) {
    return (
      <div className="sidenav" style={style}>
        <span className="closebtn">Admin Page</span>
        <Link to="/">Main page</Link>
        <Link to="/rootList">Product</Link>
        <Link>Users</Link>
        <Link to="/requests">Purchase</Link>
      </div>
    );
  }
  mainRender() {
    const Homepage = ({ Cars }) => {
      if (!Cars.length) {
        return <Loading />;
      }
      return (
        <div>
          {" "}
          {this.props.auth["Admin"] === true ? (
            <AdminPage Cars={this.props.Cars} />
          ) : (
            <LandingPage renderCars={this.renderCars()} />
          )}
        </div>
      );
    };
    const UserInteferce = () => {
      if (!this.props.auth) {
        return <Route exact path="/user/:userId" component={Loading} />;
      }
      return <Route exact path="/user/:userId" component={StateUser} />;
    };

    const sideNavOpen = {
      width: "250px"
    };
    return (
      <div>
        {this.state.Admin ? (
          <div className="main" style={{ marginLeft: "250px" }}>
            {this.renderSidenav(sideNavOpen)}
            <Header renderContent={this.renderContent()} />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={300}
                  >
                    <Switch>
                      <Route
                        exact
                        path="/"
                        component={() => <Homepage Cars={this.props.Cars} />}
                      />
                      <Route
                        exact
                        path="/product"
                        component={() => <Products />}
                      />
                      <Route
                        exact
                        path="/purchase"
                        component={() => (
                          <Purchaselist auth={this.props.auth} />
                        )}
                      />
                      <Route exact path="/rootlist" component={RootProducts} />
                      <Route
                        exact
                        path="/rootlist/:carId"
                        component={RootCarDetails}
                      />
                      <Route exact path="/New" component={CarNew} />
                      <Route
                        exact
                        path="/requests"
                        component={PurchaseDashboard}
                      />
                      <Route
                        exact
                        path="/requests/:userId"
                        component={CurrentUser}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        ) : (
          <div>
            <Header renderContent={this.renderContent()} />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={300}
                  >
                    <Switch>
                      <Route
                        exact
                        path="/"
                        component={() => <Homepage Cars={this.props.Cars} />}
                      />
                      <Route
                        exact
                        path="/product"
                        component={() => <Products />}
                      />
                      <Route
                        exact
                        path="/purchase"
                        component={() => (
                          <Purchaselist auth={this.props.auth} />
                        )}
                      />
                      <Route
                        exact
                        path="/product/:carId"
                        component={CarDetails}
                      />
                      <Route exact path="/New" component={CarNew} />
                      <UserInteferce />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.Cars ? <div> {this.mainRender()}</div> : <Loading />}
      </div>
    );
  }
}

function mapStateToProps({ auth, Cars, listPurchase, count }) {
  return { auth, Cars, listPurchase, count };
}

export default connect(
  mapStateToProps,
  actions
)(App);
