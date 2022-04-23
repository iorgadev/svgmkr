import { atom } from "jotai";

export const settingsAtom = atom({
  width: 800,
  minWidth: 400,
  height: 600,
  minHeight: 300,
  backgroundColor: "#3a0073",
  prevBackgroundColor: "#fff",
  fillColor: "#8000ff",
  fillType: "solid",
  strokeColor: "#000",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
  count: 3,
  size: 10,
  disparity: 0,
});
