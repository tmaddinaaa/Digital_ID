"use client";

import * as React from "react";

// Контейнер таблицы
export const Table = ({ children, className }) => (
  <table className={`w-full border-collapse ${className || ""}`}>{children}</table>
);

// Заголовок таблицы
export const TableHeader = ({ children, className }) => (
  <thead className={`${className || ""}`}>{children}</thead>
);

// Тело таблицы
export const TableBody = ({ children, className }) => (
  <tbody className={`${className || ""}`}>{children}</tbody>
);

// Строка таблицы
export const TableRow = ({ children, className }) => (
  <tr className={`border-b last:border-none ${className || ""}`}>{children}</tr>
);

// Ячейка таблицы
export const TableCell = ({ children, className }) => (
  <td className={`px-3 py-2 text-left ${className || ""}`}>{children}</td>
);
