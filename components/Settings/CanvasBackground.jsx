import { useState, useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useStore } from "@/store/index";

export default function CanvasBackground() {
  const [isHidden, setIsHidden] = useState(true);
  const colorRef = useRef();

  const backgroundColor = useStore((state) => state.backgroundColor);
  const prevBackgroundColor = useStore((state) => state.prevBackgroundColor);
  const setBackgroundColor = useStore((state) => state.setBackgroundColor);
  const setPrevBackgroundColor = useStore(
    (state) => state.setPrevBackgroundColor
  );

  const handleClick = (e) => {
    e.preventDefault();
    const colorElement = colorRef.current;
    if (e.target === colorElement) {
      setIsHidden((prev) => !prev);
    }
  };

  return (
    <div className="option">
      <div className="option__title">Background</div>
      <div className="option__container">
        <div
          className="color"
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
          <div className={`color__picker ${isHidden ? "hidden" : ""}`}>
            <div
              className="fixed top-0 left-0 w-screen h-screen"
              onClick={() => setIsHidden((prev) => true)}
            ></div>
            <HexColorPicker
              color={backgroundColor}
              onChange={setBackgroundColor}
            />
          </div>
        </div>
        <div className="option__input">
          <input
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div
          className="option__icon"
          onClick={() => {
            if (backgroundColor === "transparent") {
              setBackgroundColor(prevBackgroundColor);
              setPrevBackgroundColor("transparent");
            } else {
              setPrevBackgroundColor(backgroundColor);
              setBackgroundColor("transparent");
            }
          }}
        >
          {backgroundColor !== "transparent" ? (
            <EyeIcon className="w-full h-full" />
          ) : (
            <EyeOffIcon className="w-full h-full" />
          )}
        </div>
      </div>
    </div>
  );
}
