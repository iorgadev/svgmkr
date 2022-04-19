import { useState } from "react";

export default function Circle({ circleRadius = 100, x = 200, y = 200 }) {
  const [radius, setRadius] = useState(circleRadius);
  const [position, setPosition] = useState({ x: x, y: y });
  return <circle r={circleRadius} cx={position.x} cy={position.y} />;
}
