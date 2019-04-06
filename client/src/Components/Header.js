import React from "react";
import { Navbar } from "react-bootstrap";

const Header = ({renderContent}) => {
  return (
    <Navbar className="header-site">
      <Navbar.Brand style={{ color: "white" }}>Ecommerce25</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {renderContent}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
