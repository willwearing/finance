import React from "react";
import { useRecoilState } from "recoil";
import {
  tickerDataState,
  loadingState,
  xValuesState,
  yValuesState,
} from "../store/Atom";

const StockCards = () => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [tickerData, setTickerData] = useRecoilState(tickerDataState);
  const [xValues, setXValues] = useRecoilState(xValuesState);
  const [yValues, setYValues] = useRecoilState(yValuesState);

  console.log("look here for x axis values", xValues);
  console.log("y axis values:", yValues);
  return (
    <div>
      {loading ? (
        <h3>Enter a stock tickerData</h3>
      ) : (
        <div>
          <h3>Company: {tickerData["Global Quote"]["01. symbol"]}</h3>
          <h4>Open: ${tickerData["Global Quote"]["02. open"]}</h4>
          <h4>High: ${tickerData["Global Quote"]["03. high"]}</h4>
          <h4>Low: ${tickerData["Global Quote"]["04. low"]}</h4>
          <h4>Price: ${tickerData["Global Quote"]["05. price"]}</h4>
          <h4>Change: {tickerData["Global Quote"]["10. change percent"]}</h4>
        </div>
      )}
    </div>
  );
};

export default StockCards;
