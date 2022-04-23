import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import Slider from "@/components/Option/Slider";
import { ArrowsExpandIcon } from "@heroicons/react/outline";

export default function CountAmount() {
  const [settings, setSettings] = useAtom(settingsAtom);

  const updateSettingsCount = (value) => {
    setSettings((prev) => ({ ...prev, size: value }));
  };

  return (
    <Slider
      LeftIcon={ArrowsExpandIcon}
      RightIcon={ArrowsExpandIcon}
      title="Size"
      value={settings.size}
      min={1}
      max={100}
      steps={1}
      onChange={updateSettingsCount}
      smallIcon={true}
    />
  );
}

// import { useState, useEffect, useRef } from "react";
// import { useAtom } from "jotai";
// import { settingsAtom } from "@/store/index";
// import Option from "@/components/Option";
// import { ArrowsExpandIcon } from "@heroicons/react/outline";

// export default function CountAmount() {
//   const [settings, setSettings] = useAtom(settingsAtom);
//   const [count, setCount] = useState(settings.count);

//   return (
//     <Option title="Size">
//       <div className="rounded-full p-1.5 bg-neutral-700">
//         <ArrowsExpandIcon className="option__icon-round icon-small" />
//       </div>
//       <div className="relative flex items-center justify-center w-full option__slider">
//         <div className="w-full h-1 rounded-full bg-neutral-500"></div>
//         <div className="absolute w-5 h-5 border-4 rounded-full left-7 bg-neutral-300 border-neutral-500"></div>
//       </div>
//       <div className="rounded-full p-1.5 bg-neutral-700">
//         <ArrowsExpandIcon className="option__icon-round" />
//       </div>
//     </Option>
//   );
// }
