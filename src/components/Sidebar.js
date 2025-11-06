import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Database,
  Users,
  Layers,
  Grid,
  Cpu,
  Settings,
  MessageSquare,
  LogOut,
  Brain,
} from "lucide-react";

const Sidebar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const menu = [
    { path: "/", label: "Base Analytics", icon: <Database size={18} /> },
    { path: "/profiles", label: "Client 360", icon: <Users size={18} /> },
    { path: "/segments", label: "Segments", icon: <Layers size={18} /> },
    { path: "/models", label: "Models", icon: <Cpu size={18} /> },
    { path: "/client-portrait", label: "Product Portrait", icon: <Brain size={18} /> }, 
    { path: "/ai-chat", label: "AI Chat", icon: <MessageSquare size={18} /> },
    { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-white shadow-soft flex flex-col p-5 border-r border-gray-200">
      <h2 className="text-2xl font-semibold mb-8 text-primary font-nunito tracking-tight">
        Digital_ID
      </h2>

      <nav className="flex flex-col space-y-2 flex-1">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg font-inter text-sm transition ${
                isActive
                  ? "bg-yellow-400 text-white shadow-sm"
                  : "text-gray-700 hover:bg-yellow-100 hover:text-yellow-600"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition mt-4"
      >
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
