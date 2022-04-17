import Canvas from "@/components/Canvas";
import SettingsPanel from "@/components/SettingsPanel";

export default function Home() {
  return (
    <div className="wrapper">
      <Canvas />
      <SettingsPanel />
    </div>
  );
}
