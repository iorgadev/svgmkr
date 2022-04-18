import { atom } from "jotai";

export const settingsAtom = atom({
  width: 800,
  height: 600,
  backgroundColor: "#fff",
  fillColor: "#000",
  strokeColor: "#000",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
  count: 3,
  size: 10,
});
