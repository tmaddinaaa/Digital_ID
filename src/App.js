import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import ClientBaseAnalytics from "./pages/ClientBaseAnalytics";
import Profiles from "./pages/Profiles";
import ProfilePage from "./pages/ProfilePage";
import Segments from "./pages/Segments";
import Models from "./pages/Models";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import AIChat from "./pages/AIchat";
import ClientPortrait from "./pages/ClientPortrait"; // 🟢 добавлено
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("tokenExpiry");
    const now = new Date().getTime();

    if (token && expiry && now < parseInt(expiry)) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
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
          <Sidebar setIsAuthenticated={setIsAuthenticated} />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<ClientBaseAnalytics />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/profiles/:ac_id" element={<ProfilePage />} />
              <Route path="/segments" element={<Segments />} />
              <Route path="/models" element={<Models />} />
              <Route path="/ai-chat" element={<AIChat />} />
              <Route path="/client-portrait" element={<ClientPortrait />} /> {/* 🟢 новый маршрут */}
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      ) : (
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
