import React from "react";

export default function ProductImages({ imgs }) {
  return (
    <>
      <img
        src={imgs}
        className="img-fluid mx-5"
        loading="lazy"
        alt="Redmi mobile"
        width="200"
        height="50"
      />
    </>
  );
}
