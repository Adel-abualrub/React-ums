import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchData from "../hooks/useFetchData";

export default function Users() {
const {data,isLoder,isError}=useFetchData(`${import.meta.env.VITE_BURL}/users`); 
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
return (

<section className="users py-5 text-center">
  <div className="container">
    <div className="row g-3">
      {data.users.map((user) => (
        <div className="col-md-4">
          <div className="card">
            <img src={user.imageUrl} alt={user.name} className="card-img-top" />
           
          </div>
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
