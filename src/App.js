import React from "react";
import LoginButton from "./components/LoginButton";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Stock Tracking App</h1>
      <LoginButton />
      <Dashboard />
    </div>
  );
}

export default App;
