import { atom } from "recoil";

//search state
export const tickerDataState = atom({
  key: "ticker",
  default: {},
});
//loading state
export const loadingState = atom({
  key: "loading",
  default: true,
});
// returned data state
export const searchState = atom({
  key: "searchState",
  default: "",
});
//stock chart values state
export const xValuesState = atom({
  key: "xValuesState",
  default: {},
});
export const yValuesState = atom({
  key: "yValuesState",
  default: [],
});
//stock search history state
export const stockSearchHistory = atom({
  key: "stockSearchHistory",
  default: [],
});
