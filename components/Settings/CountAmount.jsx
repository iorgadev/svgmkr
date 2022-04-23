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
      max={300}
      steps={1}
      onChange={updateSettingsCount}
    />
  );
}
