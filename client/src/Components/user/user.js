import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fecthOneUser } from "../../redux/actions";
import { Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import UpdateUser from "./userPut";

const StateUser = ({ fecthOneUser, match, singleuser }) => {
  useEffect(() => {
    fecthOneUser(match.params.userId);
  }, []);

  const [user, Userup] = useState(null);
  const [field, fieldUp] = useState(null);
  const [name, nameUp] = useState(null);
  const [firstname, firstup] = useState(null);
  const [lastname, lastup] = useState(null);
  const [birth, birthUp] = useState(null);
  const [cin, CINup] = useState(null);
  const [phone, phoneUp] = useState(null);
  const [email, emailUp] = useState(null);
  const [address, addressUp] = useState(null);
  const [zip, zipUp] = useState(null);

  useEffect(() => {
    Userup(Object.assign(singleuser));
  });

  useEffect(() => {
    if(user !== {}){
      nameUp(Object.keys(singleuser));
    }  
  }, [singleuser]);

  return (
    <div className="pl-1">
      {user ? (
        <div style={{ color: "white" }}>
          <Row>
            {!field ? (
              <Col className="d-flex flex-column">
                <div className="d-flex">
                  <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                    User Name
                  </span>
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      fieldUp(user["User"]);
                      
                    }}
                  />
                </div>
                <span className="pt-1 pl-1">{user["User"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  User Name
                </span>
                <UpdateUser
                  value={field}
                  click={() => {
                    fieldUp(null);
                  }}
                  name={name[12]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {!firstname ? (
              <Col className=" d-flex flex-column">
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  First Name
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      firstup(user["firstName"]);
                    }}
                  />
                </span>
                <span className="pt-1 pl-1">{user["firstName"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  First Name
                </span>
                <UpdateUser
                  value={firstname}
                  click={() => {
                    firstup(null);
                  }}
                  name={name[2]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {!lastname ? (
              <Col className=" d-flex flex-column">
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Last Name
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      lastup(user["lastName"]);
                    }}
                  />
                </span>
                <span className="pt-1 pl-1">{user["lastName"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Last Name
                </span>
                <UpdateUser
                  value={lastname}
                  click={() => {
                    lastup(null);
                  }}
                  name={name[3]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {!birth ? (
              <Col className=" d-flex flex-column">
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Date of Birth
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      birthUp(user["dateOfBirth"]);
                    }}
                  />
                </span>
                <span className="pt-1 pl-1">{user["dateOfBirth"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Date of Birth
                </span>
                <UpdateUser
                  value={birth}
                  click={() => {
                    birthUp(null);
                  }}
                  name={name[4]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {!cin ? (
              <Col className=" d-flex flex-column">
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Cin Number
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      CINup(user["CIN"]);
                    }}
                  />
                </span>
                <span className="pt-1 pl-1">{user["CIN"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Cin Number
                </span>
                <UpdateUser
                  value={cin}
                  click={() => {
                    CINup(null);
                  }}
                  name={name[5]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {!phone ? (
              <Col className=" d-flex flex-column">
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Phone Number
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      phoneUp(user["phone"]);
                    }}
                  />
                </span>
                <span className="pt-1 pl-1">{user["phone"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Phone Number
                </span>
                <UpdateUser
                  value={phone}
                  click={() => {
                    phoneUp(null);
                  }}
                  name={name[6]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {!email ? (
              <Col className=" d-flex flex-column">
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Email address
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      emailUp(user["email"]);
                    }}
                  />
                </span>
                <span className="pt-1 pl-1">{user["email"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Email address
                </span>
                <UpdateUser
                  value={email}
                  click={() => {
                    emailUp(null);
                  }}
                  name={name[7]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {!address ? (
              <Col className=" d-flex flex-column">
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Address Line
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      addressUp(user["address"]);
                    }}
                  />
                </span>
                <span className="pt-1 pl-1">{user["address"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Address Line
                </span>
                <UpdateUser
                  value={address}
                  click={() => {
                    addressUp(null);
                  }}
                  name={name[8]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {!zip ? (
              <Col className=" d-flex flex-column">
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  ZIP Code
                  <Icon
                    name="edit"
                    className="pl-1"
                    style={{ color: "#69F0AE" }}
                    onClick={() => {
                      zipUp(user["zipCode"]);
                    }}
                  />
                </span>
                <span className="pt-1 pl-1">{user["zipCode"]}</span>
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  ZIP Code
                </span>
                <UpdateUser
                  value={zip}
                  click={() => {
                    zipUp(null);
                  }}
                  name={name[9]}
                  UserId={user["_id"]}
                />
              </Col>
            )}
          </Row>
        </div>
      ) : (
        <h1>the User</h1>
      )}
    </div>
  );
};

const mapStateToProps = ({ singleuser }) => ({ singleuser });

export default connect(
  mapStateToProps,
  { fecthOneUser }
)(StateUser);
