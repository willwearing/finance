//Mapping over returned object of previous searches - if it exists
import React from "react";
import { useRecoilState } from "recoil";
import { stockSearchHistory } from "../store/Atom";
import { useAuth0 } from "@auth0/auth0-react";

const HistoryCards = () => {
  const { user, isAuthenticated } = useAuth0();
  const [history, setHistory] = useRecoilState(stockSearchHistory);

  return (
    <div>
      <h4>Previous search history:</h4>
      {history ? (
        history.map((hist) => (
          <div key={hist.id}>
            <h5>{hist.stock_ticker}</h5>
          </div>
        ))
      ) : (
        <p>You don't have any previous searches</p>
      )}
    </div>
  );
};

export default HistoryCards;
