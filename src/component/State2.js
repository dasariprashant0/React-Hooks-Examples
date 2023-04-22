import React, { useState } from "react";

const State2 = () => {
  const [count, setCount] = useState(0);

  const limitCount = (operation) => {
    if (operation === "add") {
      if (count < 10) setCount(count + 1);
    } else {
      if (count > 0) setCount(count - 1);
    }
  };

  const renderBar = () => {
    const bars = [];

    for (let i = 0; i < count; i++) {
      bars.push(
        <div
          style={{
            backgroundColor: "rgba(212,113,211,0.3)",
            height: "100%",
            width: "10%",
          }}
        ></div>
      );
    }
    return bars;
  };
  return (
    <div>
      <h1>useState Hook Example2: </h1>
      <div
        style={{
          border: "0.1rem solid rgba(0,0,0,0.3",
          height: "100px",
          width: "80%",
          margin: "2rem auto",
          display: "flex",
        }}
      >
        {renderBar()}
      </div>
      <button onClick={() => limitCount('sub')}>Substract Bar</button>
      <button onClick={() => limitCount('add')}>Increase Bar</button>
    </div>
  );
};

export default State2;
