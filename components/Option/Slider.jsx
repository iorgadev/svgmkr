import Option from "@/components/Option";

export default function Slider({
  LeftIcon,
  RightIcon,
  title,
  value,
  min,
  max,
  onChange,
}) {
  return (
    <Option title={title}>
      <div className="flex-none rounded-full p-1.5 bg-neutral-700">
        <LeftIcon className="option__icon-round" />
      </div>
      <div className="flex items-center justify-center option__slider">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex-none rounded-full p-1.5 bg-neutral-700">
        <RightIcon className="option__icon-round" />
      </div>
    </Option>
  );
}