import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "../components/ui/table"; // создадим эти компоненты или используем shadcn

export default function Settings() {
  const [schema, setSchema] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🧩 Заглушка API — позже заменить на реальный fetch('/api/schema')
    // fetch('/api/schema')
    //   .then(res => res.json())
    //   .then(data => setSchema(data))
    //   .finally(() => setLoading(false));

    // Временные тестовые данные
    setTimeout(() => {
      setSchema([
        { name: "Имя", type: "string", source: "CRM", lastUpdated: "2025-10-01" },
        { name: "Возраст", type: "number", source: "CRM", lastUpdated: "2025-09-28" },
        { name: "Частота покупок", type: "number", source: "Transaction DB", lastUpdated: "2025-10-15" },
        { name: "Средний чек", type: "number", source: "Transaction DB", lastUpdated: "2025-10-18" },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const filteredSchema = schema.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Profile Schema Overview</h1>

      <Card className="shadow-sm border-gray-200">
        <CardHeader>
          <h2 className="text-lg font-medium">Attributes</h2>
        </CardHeader>
        <CardContent>
          {/* Фильтр поиска */}
          <div className="mb-4 flex gap-2">
            <Input
              placeholder="Поиск атрибута..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />
            <Button className="bg-[#FFB800] hover:bg-[#e5a700] text-white">
              Применить
            </Button>
          </div>

          {/* Таблица атрибутов */}
          {loading ? (
            <p>Загрузка...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Имя</TableCell>
                  <TableCell>Тип</TableCell>
                  <TableCell>Источник</TableCell>
                  <TableCell>Дата обновления</TableCell>
                  <TableCell>Действия</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSchema.map((attr, index) => (
                  <TableRow key={index}>
                    <TableCell>{attr.name}</TableCell>
                    <TableCell>{attr.type}</TableCell>
                    <TableCell>{attr.source}</TableCell>
                    <TableCell>{attr.lastUpdated}</TableCell>
                    <TableCell className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Скрыть
                      </Button>
                      <Button size="sm" variant="outline">
                        Архивировать
                      </Button>
                      <Button size="sm" variant="outline">
                        Объединить
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
