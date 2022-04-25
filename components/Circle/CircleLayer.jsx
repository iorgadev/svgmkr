import { useStore } from "@/store/index";
import shallow from "zustand/shallow";

export default function CircleLayer({ children }) {
  const { fillType, strokeWidth } = useStore(
    (state) => ({
      fillType: state.fillType,
      strokeColor: state.strokeColor,
      strokeWidth: state.strokeWidth,
    }),
    shallow
  );
  const fillColor = useStore((state) => state.fillColor);

  if (fillType === "solid") {
    return <g fill={fillColor}>{children}</g>;
  } else {
    return (
      <g fill="none" stroke={fillColor} strokeWidth={strokeWidth}>
        {children}
      </g>
    );
  }
}
