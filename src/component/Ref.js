import React, { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>useRef Hook Example:</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <h2>Current Value: {count}</h2>
      <h2>Previous Value: {previousCount.current}</h2>
    </div>
  );
};

export default Ref;
