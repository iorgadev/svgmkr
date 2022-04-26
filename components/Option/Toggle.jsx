import { useState, useEffect } from "react";
import Option from "@/components/Option";

export default function Toggle({ title, value, onChange }) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (value !== isToggled) onChange(isToggled);
  }, [isToggled]);

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
