import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetCatFact() {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], async () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };

  return { catData, isLoading, isError, refetch, refetchData };
}
