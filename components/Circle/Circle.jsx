import { useState } from "react";
import { useStore } from "@/store/index";

export default function Circle({
  index,
  circleRadius = 100,
  x = 200,
  y = 200,
}) {
  const strokeColor = useStore((state) => state.strokeColor);
  const strokeWidth = useStore((state) => state.strokeWidth);
  const shape = useStore((state) => state.shapes[index]);

  const [radius, setRadius] = useState(circleRadius); // might want to resize later
  const [position, setPosition] = useState({ x: x, y: y });
  return (
    <circle
      r={circleRadius}
      cx={shape.x}
      cy={shape.y}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  );
}
