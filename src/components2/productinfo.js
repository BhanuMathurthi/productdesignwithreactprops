import React from "react";

export default function ProductInfo({ info1, info2, info3, info4, info5 }) {
  return (
    <ul style={{ listStyleType: "none" }}>
      <li className="my-1 fs-5">
        <strong> {info1} </strong>
      </li>
      <li className="my-1">{info2}</li>
      <li className="my-1">{info3}</li>
      <li className="my-1">{info4}</li>
      <li style={{ fontSize: "16px" }} className="text-success fw-bold my-1">
        {info5}
      </li>
    </ul>
  );
}
