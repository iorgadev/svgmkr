import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function PanelSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusedOrHovered, setIsFocusedOrHovered] = useState(false);

  const ref = useRef();

  const handleOnClick = (e) => {
    e.preventDefault();
    // if (e.target === ref.current) {
    setIsOpen(!isOpen);
    // }
  };

  return (
    <div ref={ref} className="panel">
      <div className="panel__header" onClick={handleOnClick}>
        <div className="panel__header__title">{title}</div>
        <ChevronDownIcon
          className={`icon ${isOpen ? `open` : ``}`}
          onClick={(e) => handleOnClick(e)}
        />
      </div>
      {children}
    </div>
  );
}
