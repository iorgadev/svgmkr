import Slider from "@/components/Option/Slider";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { useStore } from "@/store/index";

export default function CountAmount() {
  const count = useStore((state) => state.count);
  const setCount = useStore((state) => state.setCount);

  return (
    <Slider
      LeftIcon={MinusIcon}
      RightIcon={PlusIcon}
      title="Count"
      value={count}
      min={1}
      max={300}
      steps={1}
      onChange={setCount}
    />
  );
}
