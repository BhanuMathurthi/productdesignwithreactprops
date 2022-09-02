import React from "react";
import { FaStar } from "react-icons/fa";

export default function ProductRatings({ rating1, rating2, rating3 }) {
  return (
    <>
      <button
        style={{ padding: "0px 5px 0px 5px", fontSize: "13px" }}
        className="btn btn-success d-flex align-items-center justify-content-center"
      >
        {rating1} <FaStar style={{ fontSize: "10px" }} />
      </button>
      <span
        style={{ fontSize: "13px" }}
        className="text-secondary mx-2 fw-bold"
      >
        <span>{rating2}&nbsp;</span>
        <span>&amp;</span>
        <span>&nbsp;{rating3}</span>
      </span>
    </>
  );
}
