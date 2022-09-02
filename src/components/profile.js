import React, { useContext } from "react";
import ChangeProfile from "./changeProfile";
import { AppContext } from "../App";

export default function Profile() {
  const { username } = useContext(AppContext);
  return (
    <>
      <h2 className="fw-bold">Username in profile is {username} </h2> <br />{" "}
      <ChangeProfile />
    </>
  );
}
