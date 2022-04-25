import { useState, useEffect } from "react";
import Option from "@/components/Option";

export default function Toggle({
  title,
  value,
  min,
  max,
  onChange,
  steps = 1,
}) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Option title={title} oneline={true}>
      <div
        className={`toggle ${isToggled ? `on` : ``}`}
        onClick={() => setIsToggled((prev) => !prev)}
      >
        <div className={`toggle__switch ${isToggled ? `on` : ``}`}></div>
      </div>
    </Option>
  );
}
