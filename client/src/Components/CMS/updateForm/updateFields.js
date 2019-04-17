import React, { useState } from "react";
import { Input } from "semantic-ui-react";

const CarFields = ({ input,  values }) => {
  const [value, setChange] = useState(values);
  return (
    <div>
      <Input
      
        {...input}
        style={{ marginBottom: "5px" }}
        value={value}
        onChange={(e) => {
          setChange(e.target.value);
        }}
      />
    </div>
  );
};
export default CarFields;
