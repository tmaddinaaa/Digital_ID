// CollapsibleSection.js
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const CollapsibleSection = ({ title, widgetKey, isActive, onOpen, onClose, children }) => {
  const handleClick = () => {
    if (isActive) onClose();
    else onOpen(widgetKey);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex-1 min-w-[140px] h-[55px] px-4 py-3 bg-white rounded-lg flex flex-col justify-center cursor-pointer transition-all border
        ${isActive ? "border-yellow-400 shadow-sm" : "border-transparent hover:shadow-sm"}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800 text-left whitespace-normal break-words">
          {title}
        </span>
        {isActive ? (
          <ChevronUp size={16} className="text-yellow-600" />
        ) : (
          <ChevronDown size={16} className="text-gray-500" />
        )}
      </div>

      {/* Контент раскрытого блока */}
      {isActive && (
        <div className="mt-3 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
