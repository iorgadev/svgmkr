import React from "react";
import PanelSection from "@/components/Settings/PanelSection";
import CanvasBackground from "@/components/Settings/CanvasBackground";
import CanvasSize from "@/components/Settings/CanvasSize";
import ColorFill from "@/components/Settings/ColorFill";
import StrokeColor from "@/components/Settings/StrokeColor";
import FillType from "./Settings/FillType";
import CountAmount from "@/components/Settings/CountAmount";
import SizeVariation from "@/components/Settings/SizeVariation";
import SizeAmount from "@/components/Settings/SizeAmount";
import WithinCanvasBounds from "@/components/Settings/WithinCanvasBounds";

export default function SettingsPanel() {
  return (
    <div className="settings">
      <div className="settings__container">
        <PanelSection title="Canvas">
          <CanvasSize />
        </PanelSection>

        <PanelSection title="Fill Type">
          <FillType />
        </PanelSection>

        <PanelSection title="Color">
          <CanvasBackground />
          <ColorFill />
          <StrokeColor />
        </PanelSection>

        <PanelSection title="Parameters">
          <CountAmount />
          <SizeAmount />
          <SizeVariation />
          <WithinCanvasBounds />
        </PanelSection>
      </div>

      <div className="settings__footer">
        <div className="settings__footer__container">
          <span className="text-base font-bold uppercase text-neutral-200">
            Download
          </span>
          <div className="settings__footer__buttons">
            <button className="w-full px-4 py-2 font-bold bg-green-500">
              SVG
            </button>
            <button className="w-full px-4 py-2 font-bold bg-purple-500">
              PNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
