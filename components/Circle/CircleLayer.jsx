import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function CircleLayer({ children }) {
  const [settings] = useAtom(settingsAtom);

  if (settings.fillType === "solid") {
    return <g fill={settings.fillColor}>{children}</g>;
  } else {
    return (
      <g
        fill="none"
        stroke={settings.fillColor}
        strokeWidth={settings.strokeWidth}
      >
        {children}
      </g>
    );
  }
}
