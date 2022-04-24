import React from "react";
import Option from "@/components/Option";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function CanvasSize() {
  const [settings] = useAtom(settingsAtom);
  return (
    <Option>
      <div className="canvassize">
        <div className="canvassize__container">
          <div className="canvassize__option">
            <div className="canvassize__type">W</div>
            <input type="text" value={settings.width} onChange={() => {}} />
            <div className="canvassize__measure">px</div>
          </div>

          <div className="canvassize__option">
            <div className="canvassize__type">H</div>
            <input type="text" value={settings.height} onChange={() => {}} />
            <div className="canvassize__measure">px</div>
          </div>
        </div>
      </div>
    </Option>
  );
}
