import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import Slider from "@/components/Option/Slider";
import { ShareIcon, TemplateIcon } from "@heroicons/react/outline";

export default function CountAmount() {
  const [settings, setSettings] = useAtom(settingsAtom);

  const updateSettingsCount = (value) => {
    console.log("updateSettingsCount", value);
    setSettings((prev) => ({ ...prev, sizeVariation: value }));
  };

  return (
    <Slider
      LeftIcon={ShareIcon}
      RightIcon={TemplateIcon}
      title="Size Variation"
      value={settings.sizeVariation}
      min={0}
      max={100}
      steps={2}
      onChange={updateSettingsCount}
    />
  );
}

// import { useState, useEffect, useRef } from "react";
// import { useAtom } from "jotai";
// import { settingsAtom } from "@/store/index";
// import Option from "@/components/Option";
// import { ShareIcon, TemplateIcon } from "@heroicons/react/outline";

// export default function CountAmount() {
//   const [settings, setSettings] = useAtom(settingsAtom);
//   const [count, setCount] = useState(settings.count);

//   return (
//     <Option title="Size Variation">
//       <div className="rounded-full p-1.5 bg-neutral-700">
//         <ShareIcon className="option__icon-round" />
//       </div>
//       <div className="relative flex items-center justify-center w-full option__slider">
//         <div className="w-full h-1 rounded-full bg-neutral-500"></div>
//         <div className="absolute w-5 h-5 border-4 rounded-full left-24 bg-neutral-300 border-neutral-500"></div>
//       </div>
//       <div className="rounded-full p-1.5 bg-neutral-700">
//         <TemplateIcon className="option__icon-round" />
//       </div>
//     </Option>
//   );
// }
