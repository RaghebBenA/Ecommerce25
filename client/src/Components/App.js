import React, { Component } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import * as actions from "../redux/actions";
import { connect } from "react-redux";
import { Nav, Button } from "react-bootstrap";
import { Dropdown, Divider } from "semantic-ui-react";
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
import AdminPage from "./CMS/AdminLandingpage"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { purchase: [] };
  }

  componentDidMount() {
    this.props.fecthUser();
    this.props.fetchCars();
  }

  renderCars() {
    
return  _.map(this.props.Cars, ({ name, _id, price, image, carMaker,Carvin }) => {
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
                        image,
                        carMaker,
                        Carvin
                      })
                    };
                  }}
                >
                  <i className="medium material-icons">local_grocery_store</i>
                </button>
                <Divider horizontal>Or</Divider>
                <Link to={`/product/${_id}`}>
                  <Button variant="info">More Details</Button>
                </Link>
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
        return <a href="/auth/google" style={{color:'white'}}>Login With google</a>;
      default:
        return (
          <Nav className="mr-5  ">
          { this.props.auth["Admin"] === true ?
            <NavLink
              to={`/product`}
              className="mr-3 mt-2 text-white"
              style={{ fontSize: "14px" }}
            >
              Product
            </NavLink>
            : 
            null
          }
            <NavLink
              to="/purchase"
              style={{
                textDecoration: "none",
                fontSize: "14px",
                color: "white"
              }}
              className="mr-3 mt-2"
            >
              Purchase
              <i className="small material-icons">local_grocery_store</i>{" "}
            </NavLink>{" "}
            <Dropdown
              text="Account"
              style={{ color: "white", marginTop: "7px" }}
            >
              <Dropdown.Menu direction="left">
                <Dropdown.Item text={this.props.auth.User} />
                <Dropdown.Item ><a href="/api/logout" style={{ textDecoration: "none" ,color:"black"}}>Logout</a></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        );
    }
  }

  render() {
   
    const Homepage = ({ Cars }) => {
      if (!Cars.length) {
        return <Loading />;
      }
      return <div> {this.props.auth["Admin"] === true ? <AdminPage /> :  <LandingPage renderCars={this.renderCars()} />}</div>
    };
    return (
      <div>
        <Header renderContent={this.renderContent()} />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={300}>
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
                      <Purchaselist soldCars={this.state.purchase} auth={this.props.auth} />
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
