import React from "react";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "AC",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
    "C",
    "His",
  ];
  return (
    <div className="button-container">
      {buttonsName.map((buttonsName) => (
        <button
          key={buttonsName}
          className="button"
          onClick={() => onButtonClick(buttonsName)}
        >
          {buttonsName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
