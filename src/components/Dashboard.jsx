import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useRecoilState } from "recoil";
import { searchStockState, loadingState } from "../store/Atom";
import axios from "axios";

const Dashboard = () => {
  //state
  const { user, isAuthenticated } = useAuth0();
  const [ticker, setTicker] = useRecoilState(searchStockState);
  const [loading, setLoading] = useRecoilState(loadingState);

  //useEffect for API call
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=FE9K3L2JE7ENJIKI"
      )
      .then((res) => {
        console.log(res.data);
        setTicker(res.data);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  console.log("loading", ticker);
  const handleChange = (e) => {};
  // setLoading(false)
  return (
    // user card
    isAuthenticated && (
      <div className="usercard">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <form>
          <input
            onChange={handleChange}
            name="search"
            type="text"
            placeholder="Enter Stock Ticker Symbol"
          />
          <button>Search</button>
        </form>

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <h3>{ticker["Global Quote"]["01. symbol"]}</h3>
        )}
      </div>
    )
  );
};

export default Dashboard;
