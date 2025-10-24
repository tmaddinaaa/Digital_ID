// src/pages/AIChat.js
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { SendHorizonal, Loader2 } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

/**
 * AIChat — банковская версия аналитического ассистента.
 * Поддерживает:
 * - запросы по ИИН (12 цифр) => ищет через /api/profiles?iin=...
 * - RFM / депозиты / выручка / инсайты
 * - текстовые ответы + визуализации (line / bar)
 *
 * Если API недоступен, используется локальный мок.
 */

function TextBubble({ sender, text }) {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-3 rounded-2xl max-w-[75%] whitespace-pre-line ${
          sender === "user"
            ? "bg-[#FFB800] text-white rounded-br-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

const formatCurrency = (v) =>
  typeof v === "number" ? v.toLocaleString("ru-RU") + " ₸" : v;

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text:
        "Привет! Я — банковский аналитический ассистент. Могу показать профиль по ИИН (12 цифр), динамику депозитов/расходов, RFM-разбивку и дать рекомендации. Пример: \"Информация по ИИН \" или \"Покажи рост депозитов за год\".",
    },
  ]);

  const [vizType, setVizType] = useState(null); // "line" | "bar" | null
  const [vizData, setVizData] = useState(null);
  const [loading, setLoading] = useState(false);

  const addMessage = (msg) => setMessages((m) => [...m, msg]);

  // Попытка получить профиль через API. Возвращает объект профиля или null.
  const fetchProfileByIIN = async (iin) => {
    try {
      const url = `/api/profiles?iin=${iin}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("no-api");
      const json = await res.json();
      // Поддерживаем разные форматы ответа
      if (Array.isArray(json) && json.length) return json[0];
      if (json.data && Array.isArray(json.data)) return json.data[0];
      return json;
    } catch (err) {
      return null;
    }
  };

  const handleUserQuery = async (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    addMessage({ sender: "user", text: trimmed });
    setLoading(true);
    setVizData(null);
    setVizType(null);

    const lower = trimmed.toLowerCase();

    // 1) Поиск по ИИН: 12 подряд цифр
    const iinMatch = trimmed.match(/\b\d{12}\b/);
    if (iinMatch) {
      const iin = iinMatch[0];
      addMessage({ sender: "ai", text: `Ищу профиль по ИИН ${iin}...` });

      const profile = await fetchProfileByIIN(iin);
      if (profile) {
        // Если профиль пришёл из API — используем поля, если нет — пробуем моковые имена
        const name = profile.name || profile.fullName || "—";
        const region = profile.region || "—";
        const status = profile.status || "—";
        const arpu = profile.arpu || profile.avgCheck || null;
        const lastActivity = profile.lastActivity || profile.last_activity || "—";
        const products = profile.products || profile.products_list || [];

        const profileText = `Профиль (ИИН ${iin}):
ФИО: ${name}
Регион: ${region}
Статус: ${status}
Средний доход / остаток: ${arpu ? formatCurrency(arpu) : "—"}
Последняя активность: ${lastActivity};
Продукты: ${products.length ? products.join(", ") : "—"}
Рекомендация: ${arpu && arpu > 700000 ? "Рассмотреть предложение Private Banking" : "Предложить кросс-продажи (депозит / инвестиции)."}`;

        addMessage({ sender: "ai", text: profileText });

        // Визуализация: если пришли события — показать активность
        if (profile.events && profile.events.length) {
          const chart = profile.events.map((e, idx) => ({
            name: e.date,
            value: idx + 1,
          }));
          setVizType("line");
          setVizData(chart);
        } else {
          // если нет событий, показать мок-график транзакций по месяцам
          setVizType("line");
          setVizData([
            { name: "Май", value: 410000 },
            { name: "Июн", value: 380000 },
            { name: "Июл", value: 420000 },
            { name: "Авг", value: 395000 },
            { name: "Сен", value: 360000 },
            { name: "Окт", value: 340000 },
          ]);
        }

        setLoading(false);
        return;
      }

      // если профиль не найден через API — вернуть мок
      const mockText = `Профиль (ИИН ${iin}):
ФИО: Жанна Омарова
Город: Алматы
Доход: 780 000 ₸/мес
Активные продукты: дебетовая карта, кредит, депозит "Growth"
Последняя активность: 2 дня назад

Рекомендация: предложить кросс-продажу — премиальный дебет + инвестиционный оффер.`;
      addMessage({ sender: "ai", text: mockText });

      // мок-график транзакций / баланса
      setVizType("line");
      setVizData([
        { name: "Май", value: 410000 },
        { name: "Июн", value: 380000 },
        { name: "Июл", value: 420000 },
        { name: "Авг", value: 395000 },
        { name: "Сен", value: 360000 },
        { name: "Окт", value: 340000 },
      ]);

      setLoading(false);
      return;
    }

    // 2) RFM / сегменты
    if (lower.includes("rfm") || lower.includes("rfm матрица") || lower.includes("rfm matrix")) {
      addMessage({ sender: "ai", text: "Генерирую RFM-разбивку..." });
      const rfm = [
        { name: "Champions", value: 420 },
        { name: "Loyal", value: 980 },
        { name: "Potential", value: 1500 },
        { name: "At Risk", value: 320 },
        { name: "Lost", value: 110 },
      ];
      setVizType("bar");
      setVizData(rfm);
      addMessage({
        sender: "ai",
        text:
          "Инсайт: сегмент 'At Risk' — приоритет для удержания (риск оттока выше среднего). Рекомендация: персональные кредитные каникулы или бонусы на пополнение счета.",
      });
      setLoading(false);
      return;
    }

    // 3) Депозиты / выручка / балансы
    if (lower.includes("депозит") || lower.includes("депозиты") || lower.includes("баланс") || lower.includes("выручка")) {
      addMessage({ sender: "ai", text: "Показываю динамику депозитов по городам..." });
      const deposits = [
        { name: "Астана", value: 45000 },
        { name: "Алматы", value: 38000 },
        { name: "Атырау", value: 17000 },
        { name: "Караганда", value: 14000 },
        { name: "Шымкент", value: 12000 },
      ];
      setVizType("bar");
      setVizData(deposits);
      addMessage({
        sender: "ai",
        text: "Инсайт: Астана и Алматы — лидеры по депозитам. Рекомендуется таргетированная кампания для регионов с небольшим оттоком.",
      });
      setLoading(false);
      return;
    }

    // 4) Риски / просрочки
    if (lower.includes("риск") || lower.includes("дефолт") || lower.includes("просрочк")) {
      addMessage({ sender: "ai", text: "Анализ рисков — формирую сводку..." });
      addMessage({
        sender: "ai",
        text:
          "Инсайт: рост просрочек в сегменте потребительских кредитов +7% за месяц. Основные драйверы: снижение дохода в регионах X и Y. Рекомендация: контрольные звонки и реструктуризация для клиентов с перегрузкой платежей.",
      });
      setLoading(false);
      return;
    }

    // 5) Общие инсайты / рекомендации
    if (lower.includes("инсайт") || lower.includes("рекомендац") || lower.includes("рекомендации")) {
      addMessage({ sender: "ai", text: "Ищу релевантные инсайты..." });
      addMessage({
        sender: "ai",
        text:
          "📌 Инсайт: клиенты с остатком < 50k ₸ и транзакционной активностью < 2/мес имеют повышенный риск ухода. Рекомендация: предложить микрокредит с кросс-продажей и cashback.",
      });
      setLoading(false);
      return;
    }

    // 6) По умолчанию — подсказка
    addMessage({
      sender: "ai",
      text:
        "Я могу: показать профиль по ИИН (введите 12 цифр ИИН), RFM-разбивку, распределение депозитов/балансов, инсайты по рискам. Попробуйте: 'Информация по ИИН 950618300142' или 'Покажи RFM'.",
    });
    setLoading(false);
  };

  const onSend = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    await handleUserQuery(input);
    setInput("");
  };

  return (
    <div className="p-6 space-y-6 flex flex-col h-full">
      <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">AI Banking Assistant</h1>

      <Card className="flex-1 overflow-hidden shadow-sm border-gray-200 flex flex-col">
        <CardContent className="flex-1 overflow-y-auto space-y-4 p-6 bg-white">
          {messages.map((m, i) => (
            <TextBubble key={i} sender={m.sender} text={m.text} />
          ))}

          {loading && (
            <div className="flex justify-center py-4 text-sm text-gray-500">
              <Loader2 className="animate-spin mr-2" /> Обработка запроса...
            </div>
          )}
        </CardContent>

        <div className="p-4 border-t bg-gray-50">
          <form onSubmit={onSend} className="flex gap-2">
            <Input
              placeholder="Задайте вопрос или введите ИИН (12 цифр)..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend(e)}
              className="flex-1"
            />
            <Button onClick={onSend} className="bg-[#FFB800] hover:bg-[#e5a700] text-white">
              <SendHorizonal size={18} />
            </Button>
          </form>
        </div>
      </Card>

      {/* Визуализация */}
      {vizData && vizType === "line" && (
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">График (линейный)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={vizData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#FFB800" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {vizData && vizType === "bar" && (
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Гистограмма (бар)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={vizData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#FFB800" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
