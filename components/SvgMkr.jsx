import Canvas from "@/components/Canvas";
import SettingsPanel from "@/components/SettingsPanel";
import SvgContainer from "@/components/SvgContainer";

export default function SvgMkr() {
  return (
    <div className="wrapper">
      <SettingsPanel />
      <Canvas>
        <SvgContainer />
      </Canvas>
    </div>
  );
}
