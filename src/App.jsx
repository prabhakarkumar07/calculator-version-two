import ButtonsContainer from "./Components/ButtonsContainer";
import Display from "./Components/Display";
import Title from "./Components/Title";
import { useState } from "react";

import "./App.css";

function App() {
  const [calVal, setCalVal] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalVal("");
    } else if (buttonText === "C") {
      setCalVal(calVal.slice(0, -1));
    } else if (buttonText === "His") {
      setShowHistory(!showHistory);
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setHistory([...history, { input: calVal, result }]);
      setCalVal(result.toString());
    } else if (buttonText === "Cls") {
      setHistory([]);
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
        {showHistory && (
          <div className="history">
            <button
              className="clear_history"
              type="submit"
              onClick={() => setHistory([])}
            >
              Clear History
            </button>
            <h3>History:</h3>
            <ul>
              {history.map((entry, index) => (
                <li key={index}>
                  {entry.input} = {entry.result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </center>
    </>
  );
}

export default App;
