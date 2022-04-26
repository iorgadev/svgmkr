import { useState } from "react";
import { useStore } from "@/store/index";

export default function Circle({
  index,
  circleRadius = 100,
  x = 200,
  y = 200,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [shapePositionOnClick, setShapePositionOnClick] = useState({
    x: 0,
    y: 0,
  });
  const strokeColor = useStore((state) => state.strokeColor);
  const strokeWidth = useStore((state) => state.strokeWidth);
  const shape = useStore((state) => state.shapes[index]);
  const updateShape = useStore((state) => state.updateShape);

  const [radius, setRadius] = useState(circleRadius); // might want to resize later
  const [position, setPosition] = useState({ x: x, y: y });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsSelected(true);
    setClickPosition({ x: e.clientX, y: e.clientY });
    setShapePositionOnClick({ x: shape.x, y: shape.y });
  };

  const handleMouseUp = (e) => {
    setIsSelected(false);
  };

  const handleMouseMove = (e) => {
    if (isSelected) {
      // create a new shape object with the updated position
      const newShape = {
        ...shape,
        x: shapePositionOnClick.x + e.clientX - clickPosition.x,
        y: shapePositionOnClick.y + e.clientY - clickPosition.y,
      };
      // set the new position for this shape using updateShape
      updateShape(index, newShape.x, newShape.y);
    }
  };

  return (
    <circle
      r={circleRadius}
      cx={shape.x}
      cy={shape.y}
      fill={isSelected ? "red" : "current"}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      // onClick={() => setIsSelected((prev) => !prev)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
}
