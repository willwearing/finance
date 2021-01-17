import React from "react";
import { useRecoilState } from "recoil";
import {
  tickerDataState,
  loadingState,
  xValuesState,
  yValuesState,
} from "../store/Atom";
import Plot from "react-plotly.js";

const StockCards = () => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [tickerData, setTickerData] = useRecoilState(tickerDataState);
  const [xValues, setXValues] = useRecoilState(xValuesState);
  const [yValues, setYValues] = useRecoilState(yValuesState);
  console.log(tickerData);
  return (
    <div>
      {loading ? (
        <h3>Enter a stock ticker to get price data</h3>
      ) : (
        <div>
          <div>
            <h3>Company: {tickerData["Global Quote"]["01. symbol"]}</h3>
            <h4>Open: ${tickerData["Global Quote"]["02. open"]}</h4>
            <h4>High: ${tickerData["Global Quote"]["03. high"]}</h4>
            <h4>Low: ${tickerData["Global Quote"]["04. low"]}</h4>
            <h4>Price: ${tickerData["Global Quote"]["05. price"]}</h4>
            <h4>Change: {tickerData["Global Quote"]["10. change percent"]}</h4>
          </div>
          <Plot
            data={[
              {
                x: xValues,
                y: yValues,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "red" },
              },
            ]}
            layout={{
              width: 720,
              height: 440,
              title: `${tickerData["Global Quote"]["01. symbol"]} Price Chart`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default StockCards;
