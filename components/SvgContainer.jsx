import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function SvgContainer({ children }) {
  const [settings] = useAtom(settingsAtom);

  return (
    <svg
      id="id"
      width={settings.width}
      height={settings.height}
      viewBox={`0 0 ${settings.width} ${settings.height}`}
    >
      <rect
        x="0"
        y="0"
        width={settings.width}
        height={settings.height}
        fill={settings.backgroundColor}
      />
      {children}
    </svg>
  );
}
