import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useRecoilState } from "recoil";
import { searchStockState } from "../store/Atom";
import axios from "axios";

const Dashboard = () => {
  //state
  const { user, isAuthenticated } = useAuth0();
  const { ticker, setTicker } = useRecoilState(searchStockState);

  //useEffect for API call
  useEffect(() => {
    axios
      .get(
        "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=FE9K3L2JE7ENJIKI"
      )
      .then((res) => {
        console.log(res.data);
        setTicker(res.data);
      })
      .catch((err) => console.log(err));
  });

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    // user card
    isAuthenticated && (
      <div className="usercard">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <form onChange={handleChange}>
          <input
            name="search"
            type="text"
            placeholder="Enter Stock Ticker Symbol"
          />

          {/* button to search stock tickers */}
          <button>Search</button>
        </form>
        <h1>{ticker[0].symbol}</h1>
      </div>
    )
  );
};

export default Dashboard;
