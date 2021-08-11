import React, { useState, useContext } from "react";
import { ThemeC } from "../App";

const Counter = ({ initialCount }) => {
  const [Count, setCount] = useState(initialCount);
  const style = useContext(ThemeC);
  const Inc = () => {
    if (Count > 0) {
      Count(Count - 1);
    }
  };
  return (
    <>
      <button className="button" onClick={() => Inc()}>
        -
      </button>
      <span style={style}>{Count}</span>
      <button className="button" onClick={() => setCount(Count + 1)}>
        +
      </button>
    </>
  );
};

export default Counter;
