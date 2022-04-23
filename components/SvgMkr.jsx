import Canvas from "@/components/Canvas";
import SettingsPanel from "@/components/SettingsPanel";
import SvgContainer from "@/components/SvgContainer";
import CircleLayer from "./Circle/CircleLayer";
import Circle from "./Circle/Circle";

export default function SvgMkr() {
  return (
    <div className="wrapper">
      <SettingsPanel />
      <Canvas>
        <SvgContainer>
          {/* <CircleLayer>
            <Circle />
            <Circle circleRadius="200" x="600" y="350" />
          </CircleLayer> */}
        </SvgContainer>
      </Canvas>
    </div>
  );
}
