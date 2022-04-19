import { useState, useEffect } from "react";
import Option from "../Option";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function FillType() {
  const [settings, setSettings] = useAtom(settingsAtom);
  const [fillType, setFillType] = useState(settings.fillType);

  useEffect(() => {
    if (!fillType || fillType === undefined) return;
    setSettings((prev) => ({ ...prev, fillType }));
  }, [fillType]);

  return (
    <Option>
      <div className="filltype">
        <div
          className={`filltype__option left ${
            fillType === "solid" ? `active` : ``
          }`}
          onClick={() => setFillType("solid")}
        >
          <div
            className={`w-5 h-5 ${
              fillType === "solid" ? `bg-neutral-100` : `bg-neutral-700`
            } rounded-full`}
          ></div>
          <span
            className={`${
              fillType === "solid" ? `text-neutral-100` : `text-neutral-500`
            }`}
          >
            Solid
          </span>
        </div>

        <div
          className={`filltype__option right ${
            fillType === "outline" ? `active` : ``
          }`}
          onClick={() => setFillType("outline")}
        >
          <div
            className={`w-5 h-5 border-2 ${
              fillType === "outline"
                ? `border-neutral-100`
                : `border-neutral-500`
            } rounded-full`}
          ></div>
          <span
            className={`${
              fillType === "outline" ? `text-neutral-100` : `text-neutral-500`
            }`}
          >
            Solid
          </span>
        </div>
      </div>
    </Option>
  );
}
