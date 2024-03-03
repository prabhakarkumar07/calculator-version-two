import React from "react";

const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        className="display"
        type="text"
        value={displayValue}
        readOnly
      ></input>
    </div>
  );
};

export default Display;
