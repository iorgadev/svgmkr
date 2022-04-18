import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function CircleLayer({ children }) {
  const [settings] = useAtom(settingsAtom);
  return <g fill={settings.fillColor}>{children}</g>;
}
