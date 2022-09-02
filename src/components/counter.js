import React from "react";
import useCount from "./getcounter";

export default function Counter() {
  const { count, initialCount, incrementCount, decrementCount } = useCount();

  return (
    <div className="text-center">
      <h2 className="text-primary my-5"> {count} </h2>
      <button onClick={incrementCount} className="btn btn-success">
        Increment
      </button>{" "}
      &nbsp;
      <button onClick={initialCount} className="btn btn-danger">
        Reset
      </button>{" "}
      &nbsp;
      <button onClick={decrementCount} className="btn btn-secondary">
        Decrement
      </button>{" "}
      &nbsp;
    </div>
  );
}
