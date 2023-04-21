import React, { useMemo, useState } from "react";

const Memo = () => {
  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "LimeGreen" : "crimson" }}
      >
        useMemo Hook Example:{" "}
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default Memo;
