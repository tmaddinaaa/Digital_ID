import React from "react";

export function Slider({ min, max, step = 1, value, onValueChange }) {
  const handleChange = (e) => {
    const newValue = [Number(e.target.value), value[1]];
    onValueChange(newValue);
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={handleChange}
      className="w-full accent-[#FFB800]"
    />
  );
}
