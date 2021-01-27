import React, { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Search from "./Search";

const Dashboard = () => {
  //state
  const { user, isAuthenticated } = useAuth0();

  return (
    // user card
    isAuthenticated && (
      <div className="usercard">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Search />
      </div>
    )
  );
};

export default Dashboard;
