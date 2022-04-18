import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import { HexColorPicker } from "react-colorful";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

export default function CanvasBackground() {
  const [settings, setSettings] = useAtom(settingsAtom);
  const [color, setColor] = useState("#ffffff");
  const [isHidden, setIsHidden] = useState(true);
  const colorRef = useRef();

  useEffect(() => {
    if (!color || color === undefined) return;
    setSettings((prev) => ({ ...prev, backgroundColor: color }));
  }, [color]);

  const handleClick = (e) => {
    e.preventDefault();
    const colorElement = colorRef.current;
    // if the element clicked isn't the class "color" don't hide it
    if (e.target === colorElement) {
      setIsHidden((prev) => !prev);
    }
  };

  const handleColorChange = (value) => {
    if (value.length < 7) setColor((prev) => settings.prevBackgroundColor);
    else setColor((prev) => value);
  };

  return (
    <div className="option">
      <div className="option__title">Background</div>
      <div className="option__container">
        <div
          className="color"
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
          <div className={`color__picker ${isHidden ? "hidden" : ""}`}>
            <div
              className="fixed top-0 left-0 w-screen h-screen"
              onClick={() => setIsHidden((prev) => true)}
            ></div>
            <HexColorPicker
              color={settings.backgroundColor}
              onChange={setColor}
            />
          </div>
        </div>
        <div className="option__input">
          <input
            type="text"
            value={settings.backgroundColor}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div
          className="option__icon"
          onClick={() =>
            setSettings((prev) => {
              const { backgroundColor } = prev;
              const { prevBackgroundColor } = prev;

              if (backgroundColor === "transparent")
                return {
                  ...prev,
                  backgroundColor: prevBackgroundColor,
                  prevBackgroundColor: `transparent`,
                };

              return {
                ...prev,
                prevBackgroundColor: backgroundColor,
                backgroundColor: `transparent`,
              };
            })
          }
        >
          {settings.backgroundColor !== "transparent" ? (
            <EyeIcon className="w-full h-full" />
          ) : (
            <EyeOffIcon className="w-full h-full" />
          )}
        </div>
      </div>
    </div>
  );
}
