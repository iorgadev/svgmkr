import { useEffect } from "react";
import CircleLayer from "./Circle/CircleLayer";
import Circle from "./Circle/Circle";
import { useStore } from "@/store/index";
import { useDebouncedCallback } from "use-debounce";

export default function SvgContainer({ children }) {
  const width = useStore((state) => state.width);
  const height = useStore((state) => state.height);
  const size = useStore((state) => state.size);
  const sizeVariation = useStore((state) => state.sizeVariation);
  const count = useStore((state) => state.count);
  const backgroundColor = useStore((state) => state.backgroundColor);
  const withinCanvasBounds = useStore((state) => state.withinCanvasBounds);

  const shapes = useStore((state) => state.shapes);
  const addShape = useStore((state) => state.addShape);
  const clearShapes = useStore((state) => state.clearShapes);

  const createRandomCircle = () => {
    const maxRadius = (Math.min(width, height) / 2) * (size / 100); // reduce it by a certain percentage (a settings maybe?)
    const minRadius =
      sizeVariation === 0
        ? maxRadius
        : parseInt(maxRadius * (1 - sizeVariation / 100));

    const getRandomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const radius = getRandomInt(minRadius, maxRadius);

    const getRandomXY = () => {
      let x, y;
      if (withinCanvasBounds) {
        x = getRandomInt(radius, width - radius);
        y = getRandomInt(radius, height - radius);
      } else {
        x = getRandomInt(0, width);
        y = getRandomInt(0, height);
      }
      return { x, y };
    };

    let { x, y } = getRandomXY();
    return { radius, x, y };
  };

  const debounceGenerateShapes = useDebouncedCallback(() => {
    clearShapes();
    for (let i = 0; i < count / (size / 2); i++) {
      addShape(createRandomCircle());
    }
  }, 200);

  useEffect(() => {
    debounceGenerateShapes();
  }, [width, height, count, size, sizeVariation, withinCanvasBounds]);

  return (
    <svg
      id="id"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      // style={{ transition: "all 0.1s ease-in-out" }}
    >
      {backgroundColor !== "transparent" ? (
        <rect
          x="0"
          y="0"
          width={width + 2}
          height={height + 2}
          fill={backgroundColor}
        />
      ) : null}
      <CircleLayer>
        {shapes.map((circle, index) => (
          <Circle
            key={index}
            index={index}
            circleRadius={circle.radius}
            x={circle.x}
            y={circle.y}
          />
        ))}
      </CircleLayer>
      {children}
    </svg>
  );
}
