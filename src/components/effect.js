import React, { useState, useEffect } from "react";

export default function Example() {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });

  const handlename = () => {
    setState((prev) => ({ ...prev, name }));
  };
  const handleselect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  useEffect(() => {
    console.log("state has changed");
  }, [state]);

  return (
    <div className="text-center">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name=""
        id=""
      />{" "}
      <br /> <br />
      <button onClick={handlename} className="btn btn-success">
        Add Name
      </button>{" "}
      <br />
      <br />
      <button onClick={handleselect} className="btn btn-success">
        {" "}
        Select
      </button>{" "}
      <br /> <br />
      {`{name: ${state.name}, selected: ${state.selected.toString()} }`}
    </div>
  );
}
