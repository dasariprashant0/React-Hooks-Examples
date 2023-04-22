import React, { useEffect, useState } from "react";
import Effect2 from "./useEffect2";

const Effect = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <Effect2 />
      <h1>
        UseEffect Hook Example:
        <center>
        {time.toLocaleTimeString()}
        </center>
      </h1>
    </div>
  );
};

export default Effect;
