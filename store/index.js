import { atom } from "jotai";
import { focusAtom } from "jotai/optics";

export const settingsAtom = atom({
  width: 800,
  minWidth: 400,
  height: 600,
  minHeight: 300,
  backgroundColor: "#3a0073",
  prevBackgroundColor: "#fff",
  fillColor: "#8000ff",
  fillType: "solid",
  strokeColor: "#edd9ff",
  strokeWidth: 1,
  lineCap: "round",
  lineJoin: "round",
  count: 3,
  size: 10,
  minSizePx: 1,
  sizeVariation: 1,
  disparity: 0,
  overlap: true,
});

// using jotai and optics, return just the width and height
export const sizeAtom = focusAtom(settingsAtom, (optic) => optic.prop("width"));

// create a derived atom that is the width and height of the settingsAtom
export const sizeAtomDerived = atom((get) => ({
  width: get(settingsAtom).width,
  height: get(settingsAtom).height,
}));

export const canvasWidthAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("width")
);
export const canvasHeightAtom = focusAtom(settingsAtom, (optic) =>
  optic.prop("height")
);
