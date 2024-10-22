import React from "react";

interface ComplexityProps {
  value: number | null;
}

export default function Complexity({ value }: ComplexityProps) {
  if (value == null) {
    return <div>No complexity data</div>; // Or return null if you want to render nothing
  }

  const safeValue = Math.max(1, Math.min(3, Math.round(value)));

  return (
    <div className="flex space-x-1">
      {[1, 2, 3].map((level) => (
        <div
          key={level}
          className={`h-6 w-4 rounded-xl ${
            level <= safeValue ? "bg-white" : "bg-gray-600"
          }`}
        />
      ))}
    </div>
  );
}
