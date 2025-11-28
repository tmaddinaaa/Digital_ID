import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../mock/users";

function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // имитация сети
      await new Promise((r) => setTimeout(r, 500));

      const foundUser = Object.values(mockUsers).find(
        (u) => u.username === username && u.password === password
      );

      if (!foundUser) {
        setError("Неверный логин или пароль");
        return;
      }

      // Сохраняем как будто это ответ от API
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("tokenExpiry", (Date.now() + 2 * 60 * 60 * 1000).toString());
      localStorage.setItem("role", foundUser.role);
      localStorage.setItem("permissions", JSON.stringify(foundUser.permissions || []));

      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      setError("Ошибка соединения");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-primary mb-10 font-nunito">Digital_ID</h1>

      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Вход в систему</h2>

        <input type="text" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)}
               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" disabled={loading} />

        <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}
               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" disabled={loading} />

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <button type="submit" className={`w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={loading}>
          {loading ? "Вход..." : "Войти"}
        </button>


      </form>
    </div>
  );
}

export default LoginPage;
