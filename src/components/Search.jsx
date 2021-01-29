// search component - included are a lot of api calls as recoil doesn't seem to let you set and call from state within the same component
import React, { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useRecoilState } from "recoil";
import {
  tickerDataState,
  loadingState,
  searchState,
  xValuesState,
  yValuesState,
} from "../store/Atom";
import StockCard from "./StockCards";
import SearchHistory from "./SearchHistory";

const Search = () => {
  const [ticker, setTicker] = useRecoilState(tickerDataState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const [xValues, setXValues] = useRecoilState(xValuesState);
  const [yValues, setYValues] = useRecoilState(yValuesState);
  const { user, isAuthenticated } = useAuth0();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const apiKey = "FE9K3L2JE7ENJIKI";
    let xAxisValuesArray = [];
    let yAxisValuesArray = [];
    // call finance api, set response to state and set graph plot data
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchTerm.search}&apikey=${apiKey}`
      )
      .then((res) => {
        setTicker(res.data);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchTerm.search}&outputsize=compact&apikey=${apiKey}`
      )
      .then((result) => {
        for (var key in result.data["Time Series (Daily)"]) {
          xAxisValuesArray.push(key);
          yAxisValuesArray.push(
            result.data["Time Series (Daily)"][key]["1. open"]
          );
        }
      })
      .then(() => {
        setXValues(xAxisValuesArray);
        setYValues(yAxisValuesArray);
      })
      .catch((err) => console.log(err));
    // check to see if user is in the backend using email address:

    axios
      .get(`https://finance-backend-stocks.herokuapp.com/users/${user.email}`)
      .then((res) => {
        axios
          .post("https://finance-backend-stocks.herokuapp.com/stocks", {
            user_id: res.data.id,
            stock_ticker: searchTerm.search,
          })
          .then((res) => {
            console.log(res.data, "??");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    e.target.reset();
  };

  const handleChange = (e) => {
    setSearchTerm({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          name="search"
          type="text"
          placeholder="Enter Stock Ticker Symbol"
        />
        <button>Search</button>
      </form>
      <StockCard />
      <SearchHistory />
    </div>
  );
};

export default Search;
