import { atom } from "recoil";

//using recoil atoms to set state
export const searchStockState = atom({
  key: "searchStockState",
  default: [],
});
