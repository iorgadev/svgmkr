import React from "react";
import Option from "@/components/Option";
import { useStore } from "@/store/index";

export default function CanvasSize() {
  const width = useStore((state) => state.width);
  const height = useStore((state) => state.height);

  return (
    <Option>
      <div className="canvassize">
        <div className="canvassize__container">
          <div className="canvassize__option">
            <div className="canvassize__type">W</div>
            <input type="text" value={width} onChange={() => {}} />
            <div className="canvassize__measure">px</div>
          </div>

          <div className="canvassize__option">
            <div className="canvassize__type">H</div>
            <input type="text" value={height} onChange={() => {}} />
            <div className="canvassize__measure">px</div>
          </div>
        </div>
      </div>
    </Option>
  );
}
