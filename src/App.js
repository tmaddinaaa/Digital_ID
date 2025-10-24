import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Profiles from "./pages/Profiles";
import Segments from "./pages/Segments";
import Analytics from "./pages/Analytics";
import RFM from "./pages/RFM";
import Models from "./pages/Models";
import Settings from "./pages/Settings";
import LoginPage from "./pages/LoginPage";
import AIChat from "./pages/AIchat";
import ProfilePage from "./pages/ProfilePage";
import SearchClient from "./pages/SearchClient";

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
    const interval = setInterval(checkAuth, 5000); // проверка токена каждые 5 секунд
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      {isAuthenticated ? (
        <div className="flex h-screen bg-gray-50 text-gray-900">
          <Sidebar setIsAuthenticated={setIsAuthenticated} />
          <div className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profiles" element={<Profiles />} />
              <Route path="/profiles/:iin" element={<ProfilePage />} />
              <Route path="/segments" element={<Segments />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/rfm" element={<RFM />} />
              <Route path="/models" element={<Models />} />
              <Route path="/ai-chat" element={<AIChat />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/search-client" element={<SearchClient />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
