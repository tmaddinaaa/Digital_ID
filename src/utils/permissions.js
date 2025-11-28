// src/utils/permissions.js
export const getRole = () => localStorage.getItem("role");

export const getPermissions = () => {
  try {
    return JSON.parse(localStorage.getItem("permissions") || "[]");
  } catch {
    return [];
  }
};

// Admin override: если роль admin — всегда true
export const hasPermission = (permission) => {
  const role = getRole();
  if (role === "admin") return true;
  const perms = getPermissions();
  return perms.includes(permission);
};

export const hasRole = (roleToCheck) => getRole() === roleToCheck;

// Утилита для очистки локального состояния при логауте
export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenExpiry");
  localStorage.removeItem("role");
  localStorage.removeItem("permissions");
};
