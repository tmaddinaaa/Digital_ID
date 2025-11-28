import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { profilesData } from "../data/profilesData";

import BasicInfo from "../components/widgets/BasicInfo";
import Communications from "../components/widgets/Communications";
import RelatedClients from "../components/widgets/RelatedClients";
import FinancialProfile from "../components/widgets/FinancialProfile";
import BankProductsPage from "../components/widgets/BankProductsPage";
import GroupProductsPage from "../components/widgets/GroupProductsPage";
import GeoAnalyticsWidget from "../components/widgets/GeoAnalyticsWidget";
import CollapsibleSection from "../components/CollapsibleSection";

import { ArrowLeft, UserCircle2, Eye, EyeOff } from "lucide-react";

// 🔐 импорт проверок прав
import { hasPermission } from "../utils/permissions";

const ProfilePage = () => {
  const { ac_id } = useParams();
  const navigate = useNavigate();
  const [openWidget, setOpenWidget] = useState(null);
  const [showName, setShowName] = useState(false);
  const widgetRef = useRef(null);

  const profile = profilesData.find((p) => p.ac_id === Number(ac_id));

  useEffect(() => {
    if (openWidget && widgetRef.current) {
      widgetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [openWidget]);

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-600">
        <p>Клиент с AC ID {ac_id} не найден.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-yellow-500 rounded-md text-gray-900"
        >
          Назад
        </button>
      </div>
    );
  }

  const {
    basicInfo,
    communications,
    behavior,
    financialHabits,
    financialInfo,
    relatedClients,
  } = profile;

  const handleOpen = (key) =>
    setOpenWidget((prev) => (prev === key ? null : key));

  // 🧩 Виджеты + разграничение прав
  const widgets = [
    {
      key: "bankProducts",
      title: "🏦 Продукты Банка",
      content: <BankProductsPage data={profile} />,
      permission: "view_bank_products",
    },
    {
      key: "groupProducts",
      title: "💼 Продукты Группы",
      content: <GroupProductsPage data={profile} />,
      permission: "view_group_products",
    },
    {
      key: "geoAnalytics",
      title: "🗺 Геоаналитика",
      content: <GeoAnalyticsWidget data={profile} />,
      permission: "view_geo_analytics",
    },
    {
      key: "communications",
      title: "📞 Коммуникации",
      content: <Communications data={communications} />,
      // нет permission → доступно всем
    },
    {
      key: "financialProfile",
      title: "💳 Финансовый профиль",
      permission: "view_financial_profile",
      content: (
        <FinancialProfile
          data={{ ...financialHabits, ...behavior }}
          financialInfo={financialInfo}
        />
      ),
    },
    {
      key: "related",
      title: "👥 Связанные клиенты",
      content: <RelatedClients related={relatedClients} />,
      // доступно всем
    },
  ];

  // 🔒 Фильтруем виджеты по правам (admin override уже внутри hasPermission)
  const availableWidgets = widgets.filter(
    (w) => !w.permission || hasPermission(w.permission)
  );

  const activeWidget = availableWidgets.find((w) => w.key === openWidget);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-3 sm:px-4 pb-8">
      {/* 🔝 Верхняя панель */}
      <div className="sticky top-4 z-20 w-full max-w-6xl rounded-xl bg-white/90 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-700 hover:text-yellow-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Назад</span>
          </button>

          <div className="flex items-center gap-2 border-l border-gray-300 pl-3">
            <UserCircle2 className="w-5 h-5 text-yellow-600" />
            <h1 className="text-lg font-semibold text-gray-800">
              Client Profile
            </h1>
          </div>
        </div>

        {/* 👁️ Скрытие / отображение ФИО */}
        <div className="flex items-center gap-3 text-sm text-gray-600 truncate max-w-[180px] sm:max-w-[220px] text-right">
          <span className="truncate font-medium">
            {showName ? basicInfo?.fio || profile.name || "—" : "ФИО"}
          </span>
          <button
            onClick={() => setShowName(!showName)}
            className="flex items-center gap-1 text-amber-600 hover:text-amber-700 transition"
            title={showName ? "Скрыть ФИО" : "Показать ФИО"}
          >
            {showName ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* 🧍 Основной блок информации */}
      <div
        className="w-full max-w-6xl bg-white p-6 sm:p-8 md:p-10 mt-6 shadow-sm rounded-xl"
        style={{ minHeight: "33vh" }}
      >
        <BasicInfo data={profile} />
      </div>

      {/* 🔽 Нижние компактные виджеты */}
      <div className="flex gap-3 sm:gap-4 mt-6 w-full max-w-6xl justify-between overflow-x-auto">
        {availableWidgets.map(({ key, title }) => (
          <CollapsibleSection
            key={key}
            title={
              <span
                className="text-[0.95rem] sm:text-[1rem] font-semibold text-gray-800 leading-tight break-words text-center"
                style={{ whiteSpace: "normal", wordWrap: "break-word" }}
              >
                {title}
              </span>
            }
            widgetKey={key}
            compact
            isActive={openWidget === key}
            onOpen={handleOpen}
            onClose={() => setOpenWidget(null)}
            className="flex-1 min-w-[110px] sm:min-w-[130px] md:max-w-[150px] lg:max-w-[160px]"
          />
        ))}
      </div>

      {/* 📂 Раскрытый контент */}
      {activeWidget && (
        <div
          ref={widgetRef}
          className="mt-6 w-full max-w-6xl bg-white p-5 sm:p-6 rounded-xl shadow-md outline outline-1 outline-yellow-400/60"
          style={{
            minHeight: "60vh",
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          <div className="h-full overflow-y-auto pr-2">
            {activeWidget.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
