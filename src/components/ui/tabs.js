import React, { useState } from "react";

/**
 * Универсальный Tabs-компонент с контролем состояния через value/onValueChange.
 * Работает аналогично shadcn/ui Tabs.
 */

export function Tabs({ value, onValueChange, defaultValue, children }) {
  // Если Tabs не контролируется снаружи, используем внутреннее состояние
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeTab = value ?? internalValue;
  const setActiveTab = onValueChange ?? setInternalValue;

  const childrenArray = React.Children.toArray(children);
  const tabsList = childrenArray.find(
    (child) => child.type.displayName === "TabsList"
  );
  const contents = childrenArray.filter(
    (child) => child.type.displayName === "TabsContent"
  );

  return (
    <div className="space-y-4">
      {tabsList && React.cloneElement(tabsList, { activeTab, setActiveTab })}
      {contents.map((content) =>
        React.cloneElement(content, { activeTab })
      )}
    </div>
  );
}

export function TabsList({ children, activeTab, setActiveTab }) {
  return (
    <div className="flex border-b border-gray-200">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
}
TabsList.displayName = "TabsList";

export function TabsTrigger({ value, children, activeTab, setActiveTab }) {
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 text-sm font-medium transition border-b-2 ${
        isActive
          ? "border-yellow-500 text-yellow-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      }`}
    >
      {children}
    </button>
  );
}
TabsTrigger.displayName = "TabsTrigger";

export function TabsContent({ value, activeTab, children }) {
  if (value !== activeTab) return null;
  return <div className="mt-4">{children}</div>;
}
TabsContent.displayName = "TabsContent";

