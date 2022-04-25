import { useState } from "react";
import { useStore } from "@/store/index";

export default function Canvas({ children }) {
  const width = useStore((state) => state.width);
  const setWidth = useStore((state) => state.setWidth);

  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [widthBeforeResize, setWidthBeforeResize] = useState(width);

  //handle onMouseDown for canvas resizing
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsMouseDown(true);
    setIsResizing(true);
    setIsDragging(true);
    setClickPosition((prev) => ({ x: e.clientX, y: 0 }));
  };

  //handle onMouseMove for canvas resizing
  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isResizing) {
      const diff = e.clientX - clickPosition.x;
      const newWidth = widthBeforeResize + diff * 2;
      setWidth(newWidth);
    }
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setWidthBeforeResize((prev) => width);
    setIsMouseDown((prev) => false);
    setIsResizing((prev) => false);
    setIsDragging((prev) => false);
  };

  return (
    <div className="canvas">
      <div className="relative border-4 border-neutral-800 canvas__container">
        <div
          className="absolute flex items-center justify-center bg-transparent rounded-full w-96 h-96 -right-48"
          onMouseMove={handleMouseMove}
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
        {children}
      </div>
    </div>
  );
}
