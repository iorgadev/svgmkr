import create from "zustand";

const useStore = create((set) => ({
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

  setWidth: (width) => set((state) => ({ width })),
  setHeight: (height) => set((state) => ({ height })),
  setBackgroundColor: (backgroundColor) =>
    set((state) => ({ backgroundColor })),
  setPrevBackgroundColor: (prevBackgroundColor) =>
    set((state) => ({ prevBackgroundColor })),
  setFillColor: (fillColor) => set((state) => ({ fillColor })),
  setFillType: (fillType) => set((state) => ({ fillType })),
  setStrokeColor: (strokeColor) => set((state) => ({ strokeColor })),
  setStrokeWidth: (strokeWidth) => set((state) => ({ strokeWidth })),
  setCount: (count) => set((state) => ({ count })),
  setSize: (size) => set((state) => ({ size })),
  setSizeVariation: (sizeVariation) => set((state) => ({ sizeVariation })),
}));

export { useStore };
