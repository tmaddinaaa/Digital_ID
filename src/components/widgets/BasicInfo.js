import React, { useState } from "react";
import { Eye, EyeOff, Tag } from "lucide-react";

const BasicInfo = ({ data }) => {
  // ✅ useState всегда вызывается, даже если данных нет
  const [showSensitive, setShowSensitive] = useState(false);

  if (!data) {
    return <p className="text-gray-500">Нет данных о клиенте</p>;
  }

  const info = data.basicInfo || data;
  const {
    fio, iin, birthDate, age, gender, photoUrl, contacts,
    language, citizenship, residenceCity, activeCity, device,
    status, isNew, maritalStatus, hasChildren, childrenCount,
    mobileAppRegistrationDate, bankRegistrationDate, mobileAppRegistrationDuration,
    bankRegistrationDuration, hasIP, hasLegalEntity, hasAlatauCityInvest, hasAlatauCityGarant,
    serviceChannel, lifeStatus, isPrivate
  } = info;

  const ac_id = data.ac_id;
  const segment = data.segment;
  const tags = data.tags || [];

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm flex flex-col gap-3 max-h-[70vh] overflow-y-auto">
      {/* Верхняя часть: фото + ФИО */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
        {photoUrl && (
          <img
            src={photoUrl}
            alt={fio}
            className="w-20 h-20 rounded-lg object-cover shadow-sm"
          />
        )}
        <div className="text-center sm:text-left space-y-0.5 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              {fio || "—"}
            </h2>

            {/* 👁️ Кнопка показать/скрыть */}
            <button
              onClick={() => setShowSensitive(!showSensitive)}
              className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 transition"
            >
              {showSensitive ? (
                <>
                  <EyeOff size={16} /> Скрыть
                </>
              ) : (
                <>
                  <Eye size={16} /> Показать
                </>
              )}
            </button>
          </div>

          <div className="text-gray-700 text-[0.9rem] leading-snug mt-1">
            <p><strong>AC ID:</strong> {ac_id || "—"}</p>
            <p>
              <strong>ИИН:</strong>{" "}
              {showSensitive ? (
                <span className="font-mono">{iin || "—"}</span>
              ) : (
                <span className="text-gray-400 tracking-widest">••••••••••••</span>
              )}
            </p>
            <p>
              <strong>Дата рождения:</strong> {birthDate || "—"}{" "}
              <span className="text-gray-500">
                ({age ? `${age} лет` : "—"})
              </span>
            </p>
            <p><strong>Пол:</strong> {gender || "—"}</p>
          </div>
        </div>
      </div>

      {/* Основная информация */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[0.9rem] leading-relaxed mt-2">
        <div>
          <h3 className="font-semibold text-gray-800 mb-0.5">📞 Контакты</h3>
          <p>
            <strong>Телефон:</strong>{" "}
            {showSensitive ? (
              <span className="font-mono">{contacts?.phone || "—"}</span>
            ) : (
              <span className="text-gray-400 tracking-widest">••••••••••</span>
            )}
          </p>
          <p><strong>Гражданство:</strong> {citizenship || "—"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-0.5">🏙️ Локация</h3>
          <p><strong>Регистрация:</strong> {residenceCity || "—"}</p>
          <p><strong>Активность:</strong> {activeCity || "—"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-0.5">👤 Личная информация</h3>
          <p><strong>Семья:</strong> {maritalStatus || "—"}</p>
          <p><strong>Дети:</strong> {hasChildren ? `Да (${childrenCount || 0})` : "Нет"}</p>
          <p><strong>Жизненный статус:</strong> {lifeStatus || "—"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-0.5">💼 Статус</h3>
          <p><strong>Статус:</strong> {status || "—"}</p>
          <p><strong>Наличие ИП:</strong> {hasIP ? "Да" : "Нет"}</p>
          <p><strong>Признак ЮЛ:</strong> {hasLegalEntity ? "Да" : "Нет"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-0.5">📱 Мобильное приложение</h3>
          <p>
            <strong>Регистрация:</strong>{" "}
            {mobileAppRegistrationDate || "—"} ({mobileAppRegistrationDuration || "—"})
          </p>
          <p><strong>Язык:</strong> {language || "—"}</p>
          <p><strong>Устройство:</strong> {device?.os || "—"} ({device?.model || "—"})</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-0.5">🏦 Банк</h3>
          <p>
            <strong>Регистрация:</strong>{" "}
            {bankRegistrationDate || "—"} ({bankRegistrationDuration || "—"})
          </p>
          <p><strong>Канал:</strong> {serviceChannel || "—"}</p>
          <p><strong>Признак нового клиента:</strong> {isNew ? "Да" : "—"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-0.5">🧩 Сегментация</h3>
          <p><strong>Сегмент:</strong> {segment || "—"}</p>
          <p><strong>Private статус:</strong> {isPrivate ? "Да" : "Нет"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-0.5">💰 Продукты группы</h3>
          <p><strong>Invest:</strong> {hasAlatauCityInvest ? "Да" : "—"}</p>
          <p><strong>Garant:</strong> {hasAlatauCityGarant ? "Да" : "—"}</p>
        </div>
      </div>

      {/* 🏷 Тэги клиента */}
      {tags.length > 0 && (
        <div className="border-t pt-2 mt-2">
          <div className="flex items-center gap-1 mb-1">
            <Tag size={14} className="text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">Теги клиента</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 5).map((t, i) => (
              <span
                key={i}
                className="bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded-full text-xs font-medium hover:bg-yellow-200 transition-colors duration-200"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicInfo;
