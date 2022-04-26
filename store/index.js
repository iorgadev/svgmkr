import create from "zustand";

const useStore = create((set) => ({
  shapes: [],
  width: 800,
  minWidth: 400,
  height: 600,
  minHeight: 300,
  backgroundColor: "#3a0073",
  prevBackgroundColor: "#fff",
  fillColor: "#8000ff",
  fillType: "solid",
  strokeColor: "#edd9ff",
  strokeWidth: 0,
  lineCap: "round",
  lineJoin: "round",
  count: 3,
  size: 10,
  minSizePx: 1,
  sizeVariation: 1,
  disparity: 0,
  overlap: true,
  withinCanvasBounds: true,

  addShape: (shape) => {
    set((state) => ({ shapes: [...state.shapes, shape] }));
  },
  updateShape: (id, x, y) => {
    set((state) => ({
      shapes: state.shapes.map((s, i) => (i === id ? { ...s, x, y } : s)),
    }));
  },
  clearShapes: () => {
    set((state) => ({ shapes: [] }));
  },
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

  //Parameters
  setOverlap: (overlap) => set((state) => ({ overlap })),
  setWithinCanvasBounds: (withinCanvasBounds) =>
    set((state) => ({ withinCanvasBounds })),
}));

export { useStore };
