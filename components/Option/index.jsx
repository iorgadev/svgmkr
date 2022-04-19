import React from "react";

export default function Option({ title = "", children }) {
  return (
    <div className="option">
      {title.length > 0 ? <div className="option__title">{title}</div> : null}
      <div className="option__container">{children}</div>
    </div>
  );
}
