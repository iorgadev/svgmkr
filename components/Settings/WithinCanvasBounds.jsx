import React from "react";
import { useStore } from "@/store/index";
import Toggle from "@/components/Option/Toggle";

export default function WithinCanvasBounds() {
  const withinCanvasBounds = useStore((state) => state.withinCanvasBounds);
  const setWithinCanvasBounds = useStore(
    (state) => state.setWithinCanvasBounds
  );

  return (
    <Toggle
      title="Within Bounds"
      value={withinCanvasBounds}
      onChange={setWithinCanvasBounds}
    />
  );
}
