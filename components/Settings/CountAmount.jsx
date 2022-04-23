import { useState } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";
import Slider from "@/components/Option/Slider";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";

export default function CountAmount() {
  const [settings, setSettings] = useAtom(settingsAtom);

  const updateSettingsCount = (value) => {
    setSettings((prev) => ({ ...prev, count: value }));
  };

  return (
    <Slider
      LeftIcon={MinusIcon}
      RightIcon={PlusIcon}
      title="Count"
      value={settings.count}
      min={1}
      max={100}
      onChange={updateSettingsCount}
    />
  );
}

// import { useState, useEffect, useRef } from "react";
// import { useAtom } from "jotai";
// import { settingsAtom } from "@/store/index";
// import Option from "@/components/Option";
// import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

// export default function CountAmount() {
//   const [settings, setSettings] = useAtom(settingsAtom);
//   const [count, setCount] = useState(settings.count);

//   return (
//     <Option title="Count">
//       <div className="rounded-full p-1.5 bg-neutral-700">
//         <MinusIcon className="option__icon-round" />
//       </div>
//       <div className="flex items-center justify-center w-full option__slider">
//         <input
//           type="range"
//           min="1"
//           max="10"
//           value={count}
//           onChange={(e) => setCount(e.target.value)}
//         />
//       </div>
//       <div className="rounded-full p-1.5 bg-neutral-700">
//         <PlusIcon className="option__icon-round" />
//       </div>
//     </Option>
//   );
// }
