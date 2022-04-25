import { useState, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { useStore } from "@/store/index";

export default function CanvasBackground() {
  const fillColor = useStore((state) => state.fillColor);
  const setFillColor = useStore((state) => state.setFillColor);

  const [isHidden, setIsHidden] = useState(true);
  const colorRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    const colorElement = colorRef.current;
    if (e.target === colorElement) {
      setIsHidden((prev) => !prev);
    }
  };

  return (
    <div className="option">
      <div className="option__title">Fill</div>
      <div className="option__container">
        <div
          className="color"
          style={{
            backgroundColor: `${
              fillColor !== "transparent" ? fillColor : "#ffffff"
            }`,
            backgroundImage: `${
              fillColor === "transparent" ? `url("/images/bg-grid.svg")` : ``
            }`,
          }}
          onClick={(e) => handleClick(e)}
          ref={colorRef}
        >
          <div className={`color__picker ${isHidden ? "hidden" : ""}`}>
            <div
              className="fixed top-0 left-0 w-screen h-screen"
              onClick={() => setIsHidden((prev) => true)}
            ></div>
            <HexColorPicker color={fillColor} onChange={setFillColor} />
          </div>
        </div>
        <div className="option__input">
          <input
            type="text"
            value={fillColor}
            onChange={(e) => setFillColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
