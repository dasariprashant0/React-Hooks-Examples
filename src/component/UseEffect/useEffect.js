import React, { useEffect, useState } from "react";
import Effect2 from "./useEffect2";
import Effect3 from "./useEffect3";

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
      <h1>
        UseEffect Hook Example:
        <center>
        {time.toLocaleTimeString()}
        </center>
      </h1>
      <Effect2 />
      <br />
      <Effect3 />
    </div>
  );
};

export default Effect;
