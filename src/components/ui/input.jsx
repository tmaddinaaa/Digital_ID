"use client";

import * as React from "react";

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className || ""}`}
      {...props}
    />
  );
});

Input.displayName = "Input";
