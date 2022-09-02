import React from "react";
import ProductRating from "./ProductRating";

export default function Productdescription({ data }) {
  const { list1, list2, list3, list4, list5, list6 } = data;
  return (
    <div>
      <div className="d-flex mb-3">
        <ProductRating data={data} />
      </div>
      <ul style={{ fontSize: "13px" }}>
        <li> {list1} </li>
        <li>{list2}</li>
        <li>{list3}</li>
        <li>{list4}</li>
        <li>{list5}</li>
        <li>{list6}</li>
      </ul>
    </div>
  );
}
