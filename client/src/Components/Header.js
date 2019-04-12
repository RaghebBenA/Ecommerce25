import React from "react";
import { Navbar } from "react-bootstrap";

const Header = ({ renderContent }) => {
  return (
    <Navbar style={{backgroundColor:"#3949AB", minHeight:"70px"}}>
      <Navbar.Brand href="/"  style={{textDecoration:"none",color:"white"}}>
        Ecommerce25
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">{renderContent}</Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
