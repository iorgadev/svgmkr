import React from "react";

export default function Canvas({ children }) {
  return (
    <div className="canvas">
      <div className="canvas__container">{children}</div>
    </div>
  );
}
