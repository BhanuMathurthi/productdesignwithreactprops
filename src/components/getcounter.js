import { useState } from "react";

export default function useCount() {
  const [count, setCount] = useState(0);
  const initialCount = () => {
    setCount(0);
  };
  const incrementCount = () => {
    setCount((prevVal) => ++prevVal);
  };
  const decrementCount = () => {
    setCount((prevVal) => --prevVal);
  };

  return { count, initialCount, incrementCount, decrementCount };
}
