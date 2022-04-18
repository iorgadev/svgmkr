import { useState } from "react";

export default function Circle() {
  const [radius, setRadius] = useState(70);
  const [position, setPosition] = useState({ x: 110, y: 330 });
  return <circle r={radius} cx={position.x} cy={position.y} />;
}
