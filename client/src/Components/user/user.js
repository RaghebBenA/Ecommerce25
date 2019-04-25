import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fecthOneUser } from "../../redux/actions";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import UpdateUser from "./userPut";

const CurrentUser = ({ fecthOneUser, match, auth }) => {
  useEffect(() => {
    fecthOneUser(match.params.userId);
  }, []);

  const [user, Userup] = useState(null);
  const [field, fieldUp] = useState(null);
  const [name, nameUp] = useState(null);
  const [code, codeUp] = useState(null);
  useEffect(() => {
    Userup(auth);
  }, []);
  useEffect(() => {
    nameUp(Object.keys(auth));
  }, []);

  return (
    <div>
      {user ? (
        <Container style={{ color: "white" }}>
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
                  name={name[4]}
                  UserId={user["_id"]}
                  code={code}
                />
              </Col>
            )}
          </Row>
          <Row className="pt-3">
            {code ? (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Admin Status
                </span>
                <UpdateUser
                  value={code}
                  click={() => {
                    codeUp(null);
                  }}
                  name={name[0]}
                  UserId={user["_id"]}
                />
              </Col>
            ) : (
              <Col>
                <span style={{ fontSize: "18px", fontStyle: "bold" }}>
                  Admin Status
                </span>
                <Icon
                  name="edit"
                  className="pl-1"
                  style={{ color: "#69F0AE" }}
                  onClick={() => {
                    codeUp(user["Code"]);
                  }}
                />
                {user["Admin"] === true ? (
                  <div>
                    <span className="pl-1">Admin</span>
                    <Icon name="check circle" color="green" />
                  </div>
                ) : (
                  <div>
                    <span className="pl-1">You are not an Admin</span>
                    <Icon name="times circle" color="red" />
                  </div>
                )}
              </Col>
            )}
          </Row>
        </Container>
      ) : (
        <h1>the User</h1>
      )}
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { fecthOneUser }
)(CurrentUser);
