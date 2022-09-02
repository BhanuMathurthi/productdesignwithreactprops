import React from "react";
import ProductRatings from "./productRatings";

export default function ProductDescription({
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  rating1,
  rating2,
  rating3,
}) {
  return (
    <>
      <div className="d-flex mb-3">
        <ProductRatings rating1={rating1} rating2={rating2} rating3={rating3} />
      </div>
      <ul style={{ fontSize: "13px" }}>
        <li> {list1} </li>
        <li>{list2}</li>
        <li>{list3}</li>
        <li>{list4}</li>
        <li>{list5}</li>
        <li>{list6}</li>
      </ul>
    </>
  );
}
