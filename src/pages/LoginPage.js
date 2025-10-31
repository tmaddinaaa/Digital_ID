import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // состояние загрузки
  const [error, setError] = useState(""); // сообщение об ошибке
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // --- MOCK: имитация запроса к API ---
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // --- Заглушка: пока без реального API ---
      if (username === "admin" && password === "1234") {
        const token = "mock-token"; 
        const expiry = new Date().getTime() + 90 * 60 * 1000; // токен живет 5 минут

        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiry", expiry.toString());

        setIsAuthenticated(true);
        navigate("/");
      } else {
        setError("Неверный логин или пароль");
      }

      // TODO: интегрировать с API
      // const response = await fetch("/api/login", {...});
      // const data = await response.json();
      // if (response.ok) { ... }

    } catch (err) {
      setError("Ошибка соединения с сервером");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-primary mb-10 font-nunito">
        Digital_ID
      </h1>

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-96 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Вход в систему
        </h2>

        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={loading}
        />

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className={`w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Вход..." : "Войти"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
