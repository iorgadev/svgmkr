import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import Option from "@/components/Option";
import { ShareIcon, TemplateIcon } from "@heroicons/react/outline";

export default function CountAmount() {
  const [settings, setSettings] = useAtom(settingsAtom);
  const [count, setCount] = useState(settings.count);

  return (
    <Option title="Size Variation">
      <div className="rounded-full p-1.5 bg-neutral-700">
        <ShareIcon className="option__icon-round" />
      </div>
      <div className="option__slider relative w-full items-center justify-center flex">
        <div className="w-full h-1 bg-neutral-500 rounded-full"></div>
        <div className="absolute left-24 w-5 h-5 rounded-full bg-neutral-300 border-4 border-neutral-500"></div>
      </div>
      <div className="rounded-full p-1.5 bg-neutral-700">
        <TemplateIcon className="option__icon-round" />
      </div>
    </Option>
  );
}
