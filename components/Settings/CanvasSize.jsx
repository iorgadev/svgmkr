import React from "react";
import Option from "@/components/Option";

export default function CanvasSize() {
  return (
    <Option>
      <div className="canvassize">
        <div className="canvassize__container">
          <div className="canvassize__option">
            <div className="canvassize__type">W</div>
            <input type="text" value="900" onChange={() => {}} />
            <div className="canvassize__measure">px</div>
          </div>

          <div className="canvassize__option">
            <div className="canvassize__type">H</div>
            <input type="text" value="600" onChange={() => {}} />
            <div className="canvassize__measure">px</div>
          </div>
        </div>
      </div>
    </Option>
  );
}
