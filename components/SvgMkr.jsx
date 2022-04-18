import { useState } from "react";
import Canvas from "@/components/Canvas";
import SettingsPanel from "@/components/SettingsPanel";
import SvgContainer from "@/components/SvgContainer";
import CircleLayer from "./Circle/CircleLayer";
import Circle from "./Circle/Circle";
import { useAtom } from "jotai";
import { settingsAtom } from "@/store/index";

export default function SvgMkr() {
  const [settings] = useAtom(settingsAtom);
  return (
    <div className="wrapper">
      <SettingsPanel />
      <Canvas>
        <SvgContainer>
          <CircleLayer>
            <Circle />
          </CircleLayer>
        </SvgContainer>
      </Canvas>
    </div>
  );
}
