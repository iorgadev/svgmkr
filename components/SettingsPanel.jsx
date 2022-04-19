import React from "react";
import PanelSection from "@/components/Settings/PanelSection";
import CanvasBackground from "@/components/Settings/CanvasBackground";
import CanvasSize from "@/components/Settings/CanvasSize";
import ColorFill from "@/components/Settings/ColorFill";
import FillType from "./Settings/FillType";
import CountAmount from "@/components/Settings/CountAmount";
import SizeVariation from "@/components/Settings/SizeVariation";
import SizeAmount from "@/components/Settings/SizeAmount";

export default function SettingsPanel() {
  return (
    <div className="settings">
      <PanelSection title="Canvas">
        <CanvasSize />
      </PanelSection>

      <PanelSection title="Fill Type">
        <FillType />
      </PanelSection>

      <PanelSection title="Color">
        <CanvasBackground />
        <ColorFill />
      </PanelSection>

      <PanelSection title="Parameters">
        <CountAmount />
        <SizeVariation />
        <SizeAmount />
      </PanelSection>

      <div className="settings__footer">
        <div className="settings__footer__container">
          <span className="uppercase font-bold text-base text-neutral-400">
            Download
          </span>
          <div className="settings__footer__buttons">
            <button className="px-4 py-2 bg-green-500 font-bold w-full">
              SVG
            </button>
            <button className="px-4 py-2 bg-purple-500 font-bold w-full">
              PNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
