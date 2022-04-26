import { useState } from "react";
import { useStore } from "@/store/index";

export default function Canvas({ children }) {
  const width = useStore((state) => state.width);
  const setWidth = useStore((state) => state.setWidth);
  const height = useStore((state) => state.height);
  const setHeight = useStore((state) => state.setHeight);

  const [isResizing, setIsResizing] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [widthBeforeResize, setWidthBeforeResize] = useState(width);
  const [heightBeforeResize, setHeightBeforeResize] = useState(height);

  //handle onMouseDown for canvas resizing
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    setClickPosition((prev) => ({ x: e.clientX, y: e.clientY }));
  };

  //handle onMouseMove for canvas resizing
  const handleMouseMove = (e, direction) => {
    e.preventDefault();
    if (isResizing) {
      if (direction === "ew") {
        setWidth(widthBeforeResize + (e.clientX - clickPosition.x) * 2);
      } else if (direction === "ns") {
        setHeight(heightBeforeResize + (e.clientY - clickPosition.y) * 2);
      }
    }
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setWidthBeforeResize((prev) => width);
    setHeightBeforeResize((prev) => height);
    setIsResizing((prev) => false);
  };

  return (
    <div className="canvas">
      <div className="relative border-4 border-neutral-800 canvas__container">
        <div
          className="absolute flex items-center justify-center bg-transparent rounded-full w-96 h-96 -right-48"
          onMouseMove={(e) => handleMouseMove(e, "ew")}
          onMouseUp={handleMouseUp}
        >
          <div
            onMouseDown={handleMouseDown}
            className="relative -right-0.5 flex items-center justify-center w-3 h-3 bg-neutral-600 rounded-full cursor-ew-resize"
          ></div>
          <span className="absolute text-xs font-normal tracking-widest transform rotate-90 translate-x-5 text-neutral-700">
            WIDTH
          </span>
        </div>
        <div
          className="absolute flex items-center justify-center bg-transparent rounded-full w-96 h-96 -bottom-48"
          onMouseMove={(e) => handleMouseMove(e, "ns")}
          onMouseUp={handleMouseUp}
        >
          <div
            onMouseDown={handleMouseDown}
            className="relative top-0.5 flex items-center justify-center w-3 h-3 bg-neutral-600 rounded-full cursor-ns-resize"
          ></div>
          <span className="absolute text-xs font-normal tracking-widest transform translate-y-5 text-neutral-700">
            HEIGHT
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
