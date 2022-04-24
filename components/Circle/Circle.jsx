import { useState } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function Circle({ circleRadius = 100, x = 200, y = 200 }) {
  const [settings, setSettings] = useAtom(settingsAtom);
  const [radius, setRadius] = useState(circleRadius); // might want to resize later
  const [position, setPosition] = useState({ x: x, y: y });
  return (
    <circle
      r={circleRadius}
      cx={position.x}
      cy={position.y}
      stroke={settings.strokeColor}
      strokeWidth={settings.strokeWidth}
    />
  );
}
