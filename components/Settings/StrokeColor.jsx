import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import { HexColorPicker } from "react-colorful";

export default function StrokeColor() {
  const [settings, setSettings] = useAtom(settingsAtom);
  const [color, setColor] = useState(settings.strokeColor);
  const [isHidden, setIsHidden] = useState(true);
  const colorRef = useRef();

  const updateStrokeWidth = (e) => {
    e.preventDefault();
    setSettings({
      ...settings,
      strokeWidth: e.target.value > 0 ? e.target.value : 0,
    });
  };

  useEffect(() => {
    if (!color || color === undefined) return;
    setSettings((prev) => ({ ...prev, strokeColor: color }));
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
      <div className="option__title">Stroke</div>
      <div className="option__container">
        <div
          className="color stroke"
          style={{
            backgroundColor: `${
              settings.backgroundColor !== "transparent"
                ? settings.backgroundColor
                : "#ffffff"
            }`,
            backgroundImage: `${
              settings.backgroundColor === "transparent"
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
                width: `${settings.strokeWidth}px`,
                backgroundColor: `${
                  settings.strokeColor !== "transparent"
                    ? settings.strokeColor
                    : "#ffffff"
                }`,
              }}
            ></div>
          </div>

          <div className={`color__picker ${isHidden ? "hidden" : ""}`}>
            <div
              className="fixed top-0 left-0 w-screen h-screen"
              onClick={() => setIsHidden((prev) => true)}
            ></div>
            <HexColorPicker color={settings.strokeColor} onChange={setColor} />
          </div>
        </div>
        <div className="option__input">
          <input type="text" value={settings.strokeColor} onChange={setColor} />
        </div>
        <div className="option__input-small">
          <input
            type="text"
            value={settings.strokeWidth}
            onChange={updateStrokeWidth}
          />
        </div>
      </div>
    </div>
  );
}
