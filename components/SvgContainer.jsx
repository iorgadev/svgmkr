import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function SvgContainer({ children }) {
  const [settings] = useAtom(settingsAtom);

  useEffect(() => {
    // console.log("SvgContainer.jsx: useEffect: ", settings.backgroundColor);
  }, [settings]);

  return (
    <svg
      id="id"
      width={settings.width}
      height={settings.height}
      viewBox={`0 0 ${settings.width} ${settings.height}`}
    >
      {settings.backgroundColor !== "transparent" ? (
        <rect
          x="0"
          y="0"
          width={settings.width}
          height={settings.height}
          fill={settings.backgroundColor}
        />
      ) : null}
      {children}
    </svg>
  );
}
