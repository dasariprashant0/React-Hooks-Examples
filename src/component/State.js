import React, { useState } from "react";

const State = () => {
  const [isGreen, setIsGreen] = useState(true);
  return (
    <h1
      style={{ color: isGreen ? "lightgreen" : "crimson", cursor: "pointer" }}
    >
      UseState Hook Example
      <br />
      <button onClick={() => setIsGreen(!isGreen)}>Click Me</button>
    </h1>
  );
};

export default State;
