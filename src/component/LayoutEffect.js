import React, { useLayoutEffect, useRef, useState } from "react";

const LayoutEffect = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  }, [height, width]);

  return (
    <div>
      <h1>useLayoutEffect Hook Example: </h1>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea onClick={() => setWidth(0)} ref={el} />
    </div>
  );
};

export default LayoutEffect;
