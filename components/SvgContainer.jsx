import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import CircleLayer from "./Circle/CircleLayer";
import Circle from "./Circle/Circle";

// function that returns a random number between two numbers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// function that clamps a number between two numbers
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

export default function SvgContainer({ children }) {
  const [settings] = useAtom(settingsAtom);
  // generate a circle radius based on the max radius and the size variation

  const [circles, setCircles] = useState([]);

  const createRandomCircle = () => {
    const maxRadius =
      (Math.min(settings.width, settings.height) / 2) * (settings.size / 200); // reduce it by a certain percentage (a settings maybe?)
    const minRadius =
      settings.sizeVariation === 0
        ? maxRadius
        : parseInt(maxRadius * (1 - settings.sizeVariation / 100));
    // create a random radius based on the maxRadius and settings.sizeVariation,
    // and a random position based on the settings.width and settings.height
    const radius = getRandomInt(minRadius, maxRadius);
    const x = getRandomInt(-(radius / 2), settings.width + radius / 2);
    const y = getRandomInt(-(radius / 2), settings.height + radius / 2);
    const circle = { radius, x, y };
    setCircles((prev) => [...prev, circle]);
  };

  useEffect(() => {
    setCircles((prev) => []);
    for (let i = 0; i < settings.count; i++) {
      createRandomCircle();
    }
  }, [settings.count, settings.size, settings.sizeVariation]);

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
          width={settings.width + 2}
          height={settings.height + 2}
          fill={settings.backgroundColor}
        />
      ) : null}
      <CircleLayer>
        {/* <Circle />
        <Circle circleRadius="200" x="600" y="350" /> */}
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
