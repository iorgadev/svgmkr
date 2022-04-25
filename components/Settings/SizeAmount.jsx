import Slider from "@/components/Option/Slider";
import { ArrowsExpandIcon } from "@heroicons/react/outline";
import { useStore } from "@/store/index";

export default function CountAmount() {
  const size = useStore((state) => state.size);
  const setSize = useStore((state) => state.setSize);

  return (
    <Slider
      LeftIcon={ArrowsExpandIcon}
      RightIcon={ArrowsExpandIcon}
      title="Size"
      value={size}
      min={1}
      max={100}
      steps={1}
      onChange={setSize}
      smallIcon={true}
    />
  );
}
