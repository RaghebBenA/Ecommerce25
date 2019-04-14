import React from "react";
import { Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"
 
const Header = ({ renderContent }) => {
  return (
    <Navbar style={{backgroundColor:"#3949AB", minHeight:"70px"}}>
      <Navbar.Brand  >
     <Link  style={{textDecoration:"none",color:"white"}} to="/">Ecommerce25</Link>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">{renderContent}</Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
