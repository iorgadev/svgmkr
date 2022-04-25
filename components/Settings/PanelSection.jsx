import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function PanelSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="panel">
      <div className="panel__header" onClick={handleOnClick}>
        <div className="panel__header__title">{title}</div>
        <ChevronDownIcon
          className={`icon ${isOpen ? `open` : ``}`}
          onClick={(e) => handleOnClick(e)}
        />
      </div>
      <div className={`panel__container ${isOpen ? `open` : ``}`}>
        {children}
      </div>
    </div>
  );
}
