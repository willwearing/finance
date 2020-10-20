import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Dashboard from "./components/Dashboard";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Stock Tracking App</h1>
      <LoginButton />
      <LogoutButton />
      <Dashboard />
    </div>
  );
}

export default App;
