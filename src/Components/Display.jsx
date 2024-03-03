import React from "react";

const Display = ({ displayValue }) => {
  return (
    <input
      className="display"
      type="text"
      value={displayValue}
      readOnly
    ></input>
  );
};

export default Display;
