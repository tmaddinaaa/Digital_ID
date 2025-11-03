import React, { useEffect, useRef, useState } from "react";

export default function AutoResizeContainer({ height = 260, children }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateWidth = () => {
      const newWidth = ref.current?.offsetWidth || 0;
      if (newWidth > 0) setWidth(newWidth);
    };

    // 👇 сразу вычисляем ширину при монтировании
    updateWidth();

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        if (newWidth > 0) setWidth(newWidth);
      }
    });

    resizeObserver.observe(ref.current);

    // 👇 добавляем и слушатель resize окна
    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div ref={ref} className="w-full" style={{ height }}>
      {width > 0 ? React.cloneElement(children, { width, height }) : null}
    </div>
  );
}
