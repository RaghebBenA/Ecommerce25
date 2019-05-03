import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPurchase } from "../../redux/actions";
import { Table } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";
import { Link } from "react-router-dom";

const PurchaseDashboard = ({ fetchPurchase, purchase }) => {
  useEffect(() => {
    fetchPurchase();
  }, []);

  const TableBody = _.map(
    purchase,
    ({ Products, Total, User, _id, PurchaseDate }) => {
      return (
        <tr key={_id}>
          <td>{_id}</td>
          <td>
            <Dropdown text={`${Products.length} Products`}>
              <Dropdown.Menu>
                {_.map(Products, ({ name, _id }) => {
                  return (
                    <Dropdown.Item key={_id}>
                      <p>{name}</p>
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </td>
          <td>
            <Link to={`/requests/${User["_id"]}`} style={{color:"#006064"}}>{User["UserID"]}</Link>
          </td>
          <td>{new Date(PurchaseDate).toLocaleDateString()}</td>
          <td>${Total}</td>
        </tr>
      );
    }
  );

  return (
    <div style={{ color: "white" }} className="container">
      <h2 className="pl-1">Purchase Dashboard</h2>
      <Table
        responsive
        bordered
        style={{ color: "#006064", backgroundColor: "#C5CAE9" }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Product</th>
            <th>UserId</th>
            <th>Purchase date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{TableBody}</tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = ({ purchase }) => ({ purchase });

export default connect(
  mapStateToProps,
  { fetchPurchase }
)(PurchaseDashboard);
