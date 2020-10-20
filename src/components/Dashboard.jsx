import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    isAuthenticated && (
      <div className="usercard">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <JSONPretty data={user} /> */}
      </div>
    )
  );
};

export default Dashboard;
