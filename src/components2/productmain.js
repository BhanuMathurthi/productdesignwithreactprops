import React from "react";
import Productcard from "./productCard";
import { productData } from "./productdata";

function createProduct({
  id,
  imgURL,
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
    <Productcard
      key={id}
      images={imgURL}
      heading={heading}
      list1={list1}
      list2={list2}
      list3={list3}
      list4={list4}
      list5={list5}
      list6={list6}
      info1={info1}
      info2={info2}
      info3={info3}
      info4={info4}
      info5={info5}
      rating1={rating1}
      rating2={rating2}
      rating3={rating3}
    />
  );
}

export default function ProductMain() {
  return <div>{productData.map(createProduct)}</div>;
}
