import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ renderContent }) => {
  return (
    <Navbar
      style={{ backgroundColor: "#3949AB", minHeight: "70px" }}
      expand="lg"
    >
      <Navbar.Brand>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
         Ecommerce25
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{justifyContent:"center"}}>
        {renderContent}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
