import { useEffect, useState } from "react";
import CircleLayer from "./Circle/CircleLayer";
import Circle from "./Circle/Circle";
import { useStore } from "@/store/index";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

export default function SvgContainer({ children }) {
  const width = useStore((state) => state.width);
  const height = useStore((state) => state.height);
  const size = useStore((state) => state.size);
  const sizeVariation = useStore((state) => state.sizeVariation);
  const count = useStore((state) => state.count);
  const backgroundColor = useStore((state) => state.backgroundColor);
  const withinCanvasBounds = useStore((state) => state.withinCanvasBounds);

  const [circles, setCircles] = useState([]);

  const createRandomCircle = () => {
    const maxRadius = (Math.min(width, height) / 2) * (size / 100); // reduce it by a certain percentage (a settings maybe?)
    const minRadius =
      sizeVariation === 0
        ? maxRadius
        : parseInt(maxRadius * (1 - sizeVariation / 100));

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

    const circle = { radius, x, y };

    setCircles((prev) => [...prev, circle]);
  };

  useEffect(() => {
    setCircles((prev) => []);
    for (let i = 0; i < count / (size / 2); i++) {
      createRandomCircle();
    }
  }, [width, height, count, size, sizeVariation]);

  return (
    <svg
      id="id"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
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
        {circles.map((circle, index) => (
          <Circle
            key={index}
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
