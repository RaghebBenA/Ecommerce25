import React from "react";
import { Input } from "semantic-ui-react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label
        style={{
          fontSize: "20px",
          marginBottom: "10px",
          color: "#EEFF41",
          fontWeight: "bold"
        }}
      >
        {label}
      </label>
      <Input fluid {...input} style={{ marginBottom: "5px" }} />
      <div style={{ marginBottom: "20px", color: "red" }}>
        {touched && error}
      </div>
    </div>
  );
};
