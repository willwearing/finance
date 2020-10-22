import { atom } from "recoil";

//using recoil atoms to set state
export const searchStockState = atom({
  key: "ticker",
  default: {},
});

export const loadingState = atom({
  key: "loading",
  default: true,
});

export const searchState = atom({
  key: "searchState",
  default: "",
});
