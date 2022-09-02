import React from "react";
import Productdescription from "./productdescrip";
import ProductInfo from "./ProductInfo";

export default function ProductDesign({ data }) {
  const { imgURL, heading } = data;
  return (
    <div>
      <div className="row my-5 d-flex">
        <div className="col-md">
          <img
            src={imgURL}
            className="img-fluid mx-5"
            loading="lazy"
            alt="Redmi mobile"
            width="200"
            height="50"
          />
        </div>
        <div className="col-md">
          <h2 style={{ fontSize: "15px" }} className="fw-bold">
            {heading}
          </h2>
          <Productdescription data={data} />
        </div>
        <div
          style={{ fontSize: "13px", marginLeft: "85px" }}
          className="col-md"
        >
          <ProductInfo data={data} />
        </div>
      </div>
    </div>
  );
}
