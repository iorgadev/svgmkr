import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import Option from "@/components/Option";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

export default function CountAmount() {
  const [settings, setSettings] = useAtom(settingsAtom);
  const [count, setCount] = useState(settings.count);

  return (
    <Option title="Size">
      <div className="rounded-full p-1.5 bg-neutral-700">
        <ArrowsExpandIcon className="option__icon-round icon-small" />
      </div>
      <div className="relative option__slider w-full items-center justify-center flex">
        <div className="w-full h-1 bg-neutral-500 rounded-full"></div>
        <div className="absolute w-5 h-5 left-7 rounded-full bg-neutral-300 border-4 border-neutral-500"></div>
      </div>
      <div className="rounded-full p-1.5 bg-neutral-700">
        <ArrowsExpandIcon className="option__icon-round" />
      </div>
    </Option>
  );
}
