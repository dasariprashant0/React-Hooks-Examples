import React, { useEffect, useState } from "react";

const Effect = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <h1>
      UseEffect Hook Example:
      <br />
      {time.toLocaleTimeString()}
    </h1>
  );
};

export default Effect;
