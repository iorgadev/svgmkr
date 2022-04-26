import Option from "@/components/Option";

export default function Slider({
  LeftIcon,
  RightIcon,
  title,
  value,
  min,
  max,
  onChange,
  smallIcon = false,
  steps = 1,
}) {
  const widthPercentage = (value / max) * 100;
  return (
    <Option title={title}>
      <div className="flex-none rounded-full p-1.5 bg-neutral-700">
        <LeftIcon
          className={`option__icon-round ${smallIcon ? `icon-small` : ``}`}
        />
      </div>
      <div className="relative flex items-center justify-start option__slider">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={steps}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
        <div className="absolute w-full h-1.5 rounded-l-full rounded-r-full bg-neutral-700"></div>
        <div
          className={`absolute h-1.5 rounded-l-full rounded-r-full bg-neutral-500 flex items-center justify-end`}
          style={{ width: `${widthPercentage}%` }}
        >
          {/* <div className="relative w-5 h-5 rounded-full pointer-events-none bg-neutral-600 cursor-ew-resize"></div> */}
        </div>
      </div>
      <div className="flex-none rounded-full p-1.5 bg-neutral-700">
        <RightIcon className="option__icon-round" />
      </div>
    </Option>
  );
}
