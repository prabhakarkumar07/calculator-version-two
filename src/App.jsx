import "./App.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
import Title from "./Components/Title";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <center className="container">
        <Title />
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </center>
    </>
  );
}

export default App;
