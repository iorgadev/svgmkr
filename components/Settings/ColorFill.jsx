import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import { HexColorPicker } from "react-colorful";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

export default function CanvasBackground() {
  const [settings, setSettings] = useAtom(settingsAtom);
  const [color, setColor] = useState(settings.fillColor);
  const [isHidden, setIsHidden] = useState(true);
  const colorRef = useRef();

  useEffect(() => {
    if (!color || color === undefined) return;
    setSettings((prev) => ({ ...prev, fillColor: color }));
  }, [color]);

  const handleClick = (e) => {
    e.preventDefault();
    const colorElement = colorRef.current;
    // if the element clicked isn't the class "color" don't hide it
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
              settings.fillColor !== "transparent"
                ? settings.fillColor
                : "#ffffff"
            }`,
            backgroundImage: `${
              settings.fillColor === "transparent"
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
            <HexColorPicker color={settings.fillColor} onChange={setColor} />
          </div>
        </div>
        <div className="option__input">
          <input
            type="text"
            value={settings.fillColor}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
