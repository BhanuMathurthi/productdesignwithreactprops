import React from "react";
import useGetCatFact from "./useGetCatFact";

export default function Cat() {
  const { catData, isLoading, isError, refetch } = useGetCatFact();

  if (isLoading)
    return <h1 className="fw-bold my-3 text-success">Loading...</h1>;

  if (isError)
    return ( 
      <h1 className="fw-bold my-3 text-danger">Sorry there was a error...</h1>
    );
  return (
    <div>
      <h2> {catData?.fact} </h2>
      <button onClick={refetch} className="btn btn-primary my-5">
        Request Another quote
      </button>
    </div>
  );
}
