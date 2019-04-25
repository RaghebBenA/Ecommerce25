import React, { useState } from "react";
import { Input } from "semantic-ui-react";

const UserFields = ({ input, values ,type }) => {
  const [value, setChange] = useState(values);
  return (
    <div>
      <Input
        {...input}
        type={type}
        style={{ marginBottom: "5px" }}
        value={value}
        onChange={(e) => {
          setChange(e.target.value);
        }}
      />
    </div>
  );
};
export default UserFields;