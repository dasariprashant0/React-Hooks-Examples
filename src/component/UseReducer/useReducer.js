import { useReducer } from "react";
import Reducer2 from "./useReducer2";

const Reducer = () => {
  function counterReducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  function handleIncrement() {
    dispatch({ type: "INCREMENT" });
  }
  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div>
      <h1>useReducer Hook Example1:</h1>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <Reducer2 />
    </div>
  );
};

export default Reducer;
