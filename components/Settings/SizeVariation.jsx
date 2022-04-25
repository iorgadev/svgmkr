import Slider from "@/components/Option/Slider";
import { ShareIcon, TemplateIcon } from "@heroicons/react/outline";
import { useStore } from "@/store/index";

export default function CountAmount() {
  const sizeVariation = useStore((state) => state.sizeVariation);
  const setSizeVariation = useStore((state) => state.setSizeVariation);

  return (
    <Slider
      LeftIcon={ShareIcon}
      RightIcon={TemplateIcon}
      title="Size Variation"
      value={sizeVariation}
      min={0}
      max={100}
      steps={2}
      onChange={setSizeVariation}
    />
  );
}
