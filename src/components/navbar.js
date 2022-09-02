import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/"></Link>
        <Link className="mx-2" to="/profile">
          Profile
        </Link>
        <Link className="mx-2" to="/contact">
          Contact
        </Link>
        <Link className="mx-2" to="/form">
          Form
        </Link>
      </nav>
    </>
  );
}
