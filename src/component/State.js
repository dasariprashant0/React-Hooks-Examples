import React, { useState } from "react";
import StateHook from "./State2";

const State = () => {
  const [isGreen, setIsGreen] = useState(true);
  return (
    <div>
      <h1
        style={{ color: isGreen ? "lightgreen" : "crimson", cursor: "pointer" }}
      >
        UseState Hook Example
        <br />
      </h1>
      <button onClick={() => setIsGreen(!isGreen)}>Click Me</button>
      <br />
      <br />
      <StateHook />
    </div>
  );
};

export default State;
