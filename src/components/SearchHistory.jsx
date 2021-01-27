//Component to show history of previous searches
import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { stockSearchHistory } from "../store/Atom";
import { useAuth0 } from "@auth0/auth0-react";
import HistoryCards from "./HistoryCards";

const ListStockCards = () => {
  const { user, isAuthenticated } = useAuth0();
  const [history, setHistory] = useRecoilState(stockSearchHistory);

  useEffect(() => {
    axios
      .get(
        `https://finance-backend-stocks.herokuapp.com/stocks/email/${user.email}`
      )
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setHistory, user, history]);

  return <HistoryCards />;
};

export default ListStockCards;
