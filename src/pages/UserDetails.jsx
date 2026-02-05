import React from "react";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { Id } = useParams();
  const { data, isLoder, isError } = useFetchData(
    `${import.meta.env.VITE_BURL}/users/${Id}`,
  );
  console.log(data);
  if (isLoder) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (isError) {
    return <h2>Error</h2>;
  }
  return <><h2>user name: {data.data.name}</h2>
  <h2>Age: {data.data.age}</h2>

  
  
  </>;
}
