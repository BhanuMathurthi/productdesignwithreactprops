import React, { useState } from "react";

export default function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return { state, toggle };
}
