import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <div>{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me to increment
      </button>
      <br />
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        click me to decrement
      </button>
      <br />
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        default value
      </button>
    </>
  );
};

export default Counter;
