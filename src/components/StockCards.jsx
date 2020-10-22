import React from "react";
import { useRecoilState } from "recoil";
import { searchStockState, loadingState } from "../store/Atom";

const StockCards = () => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [ticker, setTicker] = useRecoilState(searchStockState);

  return (
    <div>
      {loading ? (
        <h3>Enter a stock ticker</h3>
      ) : (
        <div>
          <h3>Company: {ticker["Global Quote"]["01. symbol"]}</h3>
          <h4>Open: ${ticker["Global Quote"]["02. open"]}</h4>
          <h4>High: ${ticker["Global Quote"]["03. high"]}</h4>
          <h4>Low: ${ticker["Global Quote"]["04. low"]}</h4>
          <h4>Price: ${ticker["Global Quote"]["05. price"]}</h4>
          <h4>Change: {ticker["Global Quote"]["10. change percent"]}</h4>
        </div>
      )}
    </div>
  );
};

export default StockCards;
