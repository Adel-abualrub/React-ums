import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetchData from "../hooks/useFetchData";
import User from "../components/user/User";
import { Link } from "react-router-dom";

export default function Users() {
const {data,isLoder,isError}=useFetchData(`${import.meta.env.VITE_BURL}/users`); 

const handleDelete = async (id) => {
  try {
    
    await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
    console.log("User deleted successfully");
   window.location.reload();
  } catch (error) {
    console.error("There was an error deleting the user:", error);
  }
};

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
       <User user={user} onDelete={handleDelete}/>
      ))}
    </div>
  </div>
 
</section>
  );
}
