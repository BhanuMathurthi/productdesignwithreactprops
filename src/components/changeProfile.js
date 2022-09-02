import React, { useContext, useState } from "react";
import { AppContext } from "../App";

export default function ChangeProfile() {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);

  return (
    <>
      <input
        onChange={(event) => setNewUsername(event.target.value)}
        type="text"
        name=""
        id=""
      />
      <button
        onClick={() => {
          setUsername({ newUsername });
        }}
      >
        Change Username
      </button>
    </>
  );
}
