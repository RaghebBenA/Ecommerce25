import React, { useEffect } from "react";
import { fetchPurchase } from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

const AdminPage = ({ Cars, purchase, fetchPurchase }) => {
  useEffect(() => {
    fetchPurchase();
  }, []);

  const data = [
    { name: "Cars", obj: `Car Number ${Cars.length}`, link: "/rootlist" },
    {
      name: "Purchase",
      obj: `Purchase Number ${purchase.length}`,
      link: "/requests"
    }
  ];

  const renderSection = _.map(data, ({ name, obj, link }) => {
    return (
      <Link to={link} style={{color:"black"}} key={name}>
        <div
          
          style={{
            border: "none",
            boxSahdow: " 2px 1px 24px 24px rgba(230,230,230,1)",
            borderRadius: "5px",
            maxWidth: "400px",
            minWidth: "300px",
            backgroundColor: "white"
          }}
          className="mr-1 "
        >
          <div className="row aling-items-start ml-1">
            <h3>{name}</h3>
          </div>
          <div className="row aling-items-center ml-1">
            <h4 style={{ paddingLeft: "10px" }}>{obj}</h4>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="container d-flex">{renderSection}</div>;
};

const mapStateToprops = ({ purchase }) => ({ purchase });

export default connect(
  mapStateToprops,
  { fetchPurchase }
)(AdminPage);
