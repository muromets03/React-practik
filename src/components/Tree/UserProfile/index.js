import React from "react";
import {WithUser } from "../../../contexts";


const UserProfile = (props) => {
  const   { fname, lname, avatar }=props.user;
 
   return (
    <div>
      USER:
      <h2>
        {fname} {lname}
      </h2>
      <img src={avatar} alt={lname} />
    </div>
  )
   }
 

export default WithUser(UserProfile);