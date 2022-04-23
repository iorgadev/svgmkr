import React from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function Canvas({ children }) {
  const [settings, setSettings] = useAtom(settingsAtom);
  const [isResizing, setIsResizing] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isMouseDown, setIsMouseDown] = React.useState(false);
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [clickPosition, setClickPosition] = React.useState({ x: 0, y: 0 });
  const [widthBeforeResize, setWidthBeforeResize] = React.useState(
    settings.width
  );

  //handle onMouseDown for canvas resizing
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsMouseDown(true);
    setIsResizing(true);
    setIsDragging(true);
    // log the current mouse position at click
    const { clientX } = e;
    console.log("clientX: ", clientX);
    setClickPosition((prev) => ({ x: clientX, y: 0 }));
  };

  //handle onMouseMove for canvas resizing
  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isResizing) {
      const diff = e.clientX - clickPosition.x;
      const newWidth = widthBeforeResize + diff * 2;
      console.log("newWidth: ", newWidth);
      setSettings((prev) => ({ ...prev, width: newWidth }));
    }
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setWidthBeforeResize((prev) => settings.width);
    setIsMouseDown((prev) => false);
    setIsResizing((prev) => false);
    setIsDragging((prev) => false);
  };

  return (
    <div className="canvas">
      <div className="relative border-4 border-neutral-800 canvas__container">
        <div
          className="absolute flex items-center justify-center bg-transparent rounded-full w-96 h-96 -right-48"
          // onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div
            onMouseDown={handleMouseDown}
            className="relative -right-0.5 flex items-center justify-center w-3 h-3 bg-neutral-600 rounded-full cursor-ew-resize"
          ></div>
        </div>
        {children}
      </div>
    </div>
  );
}
