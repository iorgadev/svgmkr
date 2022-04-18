import React from "react";
import PanelSection from "@/components/Settings/PanelSection";
import CanvasBackground from "@/components/Settings/CanvasBackground";
import CanvasSize from "@/components/Settings/CanvasSize";

export default function SettingsPanel() {
  return (
    <div className="settings">
      <PanelSection title="Canvas">
        <CanvasSize />
        <CanvasBackground />
      </PanelSection>
      <PanelSection title="Variants" />
      <PanelSection title="Direction" />
    </div>
  );
}
