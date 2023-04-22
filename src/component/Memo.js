import React, { useEffect, useMemo, useState } from "react";

const Memo = () => {
  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  const [num, setNum] = useState(30);
  const [left, setLeft] = useState(0);
  const fib = useMemo(() => fibonacci(num), [num]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  return (
    <div>
      <h1>useMemo Hook Example:</h1>
      <center>
        <div
          style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
          className="ball"
        ></div>
      </center>
      <h2>
        Count: {num} <button onClick={() => setNum(num + 1)}>+</button>
      </h2>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
    </div>
  );
};

export default Memo;
