import React from "react";

export default function Option({ title = "", oneline = false, children }) {
  return (
    <div className={`${!oneline ? `option` : `option-online`}`}>
      {title.length > 0 ? <div className="option__title">{title}</div> : null}
      <div className="option__container">{children}</div>
    </div>
  );
}
