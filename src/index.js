import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click on Me!";
}

const App = () => {
  const buttonText = "Click Me!";
  const style = { backgroundColor: "blue", color: "white" };

  const onButtonText = { text: "Click on Me!" };

  const labelText = "Enter Name:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}{" "}
      </label>
      <input type="text" id="name" />

      <button style={style}>{buttonText}</button>

      <button style={{ backgroundColor: "red", color: "white" }}>
        {onButtonText.text}
      </button>

      <button style={{ backgroundColor: "green", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
