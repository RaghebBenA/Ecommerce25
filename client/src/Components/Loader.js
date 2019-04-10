import React from "react";
import Loader from "react-loader-spinner";
import { Row, Col } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:'880px' ,backgroundColor: "#d1d0cc"}}> 
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Loader type="Triangle" color="black" height="100" width="100" />
        </Col>
      </Row>
    </div>
  );
};
export default Loading;
