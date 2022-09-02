import React from "react";
import ProductImages from "./productImages";
import ProductDescription from "./productdescription";
import ProductInfo from "./productinfo";

export default function Productcard({
  images,
  heading,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  info1,
  info2,
  info3,
  info4,
  info5,
  rating1,
  rating2,
  rating3,
}) {
  return (
    <>
      <div className="row my-5 d-flex">
        <div className="col-md">
          <ProductImages imgs={images} />
        </div>
        <div className="col-md">
          <h2 style={{ fontSize: "15px" }} className="fw-bold">
            {heading}
          </h2>
          <ProductDescription
            list1={list1}
            list2={list2}
            list3={list3}
            list4={list4}
            list5={list5}
            list6={list6}
            rating1={rating1}
            rating2={rating2}
            rating3={rating3}
          />
        </div>
        <div
          style={{ fontSize: "13px", marginLeft: "85px" }}
          className="col-md"
        >
          <ProductInfo
            info1={info1}
            info2={info2}
            info3={info3}
            info4={info4}
            info5={info5}
          />
        </div>
      </div>
    </>
  );
}
