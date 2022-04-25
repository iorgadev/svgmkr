import { useState, useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { useStore } from "@/store/index";
import shallow from "zustand/shallow";

export default function StrokeColor() {
  const [isHidden, setIsHidden] = useState(true);
  const colorRef = useRef();

  const {
    fillType,
    backgroundColor,
    strokeColor,
    strokeWidth,
    setStrokeColor,
    setStrokeWidth,
  } = useStore(
    (state) => ({
      fillType: state.fillType,
      backgroundColor: state.backgroundColor,
      strokeColor: state.strokeColor,
      strokeWidth: state.strokeWidth,
      setStrokeColor: state.setStrokeColor,
      setStrokeWidth: state.setStrokeWidth,
    }),
    shallow
  );

  useEffect(() => {
    if (fillType === "outline" && strokeWidth < 1) {
      setStrokeWidth(1);
    }
  }, [fillType]);

  const updateStrokeWidth = (e) => {
    e.preventDefault();
    setStrokeWidth(
      e.target.value > 0
        ? parseInt(e.target.value)
        : fillType === "solid"
        ? 0
        : 1
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    const colorElement = colorRef.current;
    if (e.target === colorElement) {
      setIsHidden((prev) => !prev);
    }
  };

  return (
    <div className="option">
      <div className="option__title">Stroke</div>
      <div className="option__container">
        <div
          className="color stroke"
          style={{
            backgroundColor: `${
              backgroundColor !== "transparent" ? backgroundColor : "#ffffff"
            }`,
            backgroundImage: `${
              backgroundColor === "transparent"
                ? `url("/images/bg-grid.svg")`
                : ``
            }`,
          }}
          onClick={(e) => handleClick(e)}
          ref={colorRef}
        >
          <div className="relative flex items-center justify-center w-full h-full overflow-hidden pointer-events-none">
            <div
              className="h-full transform scale-150 rotate-45 rounded-full pointer-events-none"
              style={{
                width: `${strokeWidth}px`,
                backgroundColor: `${
                  strokeColor !== "transparent" ? strokeColor : "#ffffff"
                }`,
              }}
            ></div>
          </div>

          <div className={`color__picker ${isHidden ? "hidden" : ""}`}>
            <div
              className="fixed top-0 left-0 w-screen h-screen"
              onClick={() => setIsHidden((prev) => true)}
            ></div>
            <HexColorPicker color={strokeColor} onChange={setStrokeColor} />
          </div>
        </div>
        <div className="option__input">
          <input type="text" value={strokeColor} onChange={setStrokeColor} />
        </div>
        <div className="relative flex items-center justify-center option__input-small">
          <input type="text" value={strokeWidth} onChange={updateStrokeWidth} />
          <span className="absolute bottom-0.5 text-xs font-semibold text-neutral-400">
            px
          </span>
        </div>
      </div>
    </div>
  );
}
