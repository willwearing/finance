import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  tickerDataState,
  loadingState,
  searchState,
  xValuesState,
  yValuesState,
} from "../store/Atom";
import StockCard from "./StockCards";

const Search = () => {
  const [ticker, setTicker] = useRecoilState(tickerDataState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const [xValues, setXValues] = useRecoilState(xValuesState);
  const [yValues, setYValues] = useRecoilState(yValuesState);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const apiKey = "FE9K3L2JE7ENJIKI";
    let dataBackArray = [];
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
        // console.log(result.data["Time Series (Daily)"]);
        setXValues(result.data);
        // for (var key in res.data["Time Series (Daily)"]) {
        //   dataBackArray.push(key);
        //   console.log(dataBackArray);
        // setYValues(res.data["Time Series (Daily)"][key]["1. open"]);
        // console.log("look here", xValues);
      })
      // })
      // .then(() => {
      //   setXValues(dataBackArray);
      //   console.log(xValues);
      // })
      .catch((err) => console.log(err));
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
    </div>
  );
};

export default Search;
