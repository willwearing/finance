import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { searchStockState, loadingState, searchState } from "../store/Atom";
import StockCard from "./StockCards";

const Search = () => {
  const [ticker, setTicker] = useRecoilState(searchStockState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${searchTerm.search}&apikey=FE9K3L2JE7ENJIKI`
      )
      .then((res) => {
        setTicker(res.data);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
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
