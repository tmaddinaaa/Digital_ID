import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ClientBaseAnalytics from "./pages/ClientBaseAnalytics";
import Profiles from "./pages/Profiles";
import ProfilePage from "./pages/ProfilePage";
import Segments from "./pages/Segments";
import Models from "./pages/Models";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import AIChat from "./pages/AIchat";
import ClientPortrait from "./pages/ClientPortrait";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

import ProtectedRoute from "./components/ProtectedRoute";
import { getRole } from "./utils/permissions";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Проверка токена + роли каждые 5 секунд
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("tokenExpiry");
    const role = getRole();
    const now = Date.now();

    if (token && expiry && now < parseInt(expiry) && role) {
      setIsAuthenticated(true);
    } else {
      // чистим если токен протух или нет роли
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
      localStorage.removeItem("role");
      localStorage.removeItem("permissions");
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
    const interval = setInterval(checkAuth, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <ScrollToTop />

      {isAuthenticated ? (
        <div className="flex min-h-screen bg-gray-50 text-gray-900">
          {/* Левое меню */}
          <Sidebar setIsAuthenticated={setIsAuthenticated} />

          {/* Основной контент */}
          <main className="flex-1 p-6 overflow-y-auto ml-64">
            <Routes>
              <Route path="/" element={<ClientBaseAnalytics />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/profiles/:ac_id" element={<ProfilePage />} />
              <Route path="/segments" element={<Segments />} />
              <Route path="/models" element={<Models />} />

              {/* 🔒 Settings доступны только admin */}
              <Route
                path="/settings"
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <Settings />
                  </ProtectedRoute>
                }
              />

              {/* 🔒 AIChat защищён permission-ом */}
              <Route
                path="/ai-chat"
                element={
                  <ProtectedRoute requiredPermission="view_geo_analytics">
                    <AIChat />
                  </ProtectedRoute>
                }
              />

              <Route path="/client-portrait" element={<ClientPortrait />} />

              {/* Неизвестный путь → на главную */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <ScrollToTopButton />
        </div>
      ) : (
        // Без авторизации видна только страница логина
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
