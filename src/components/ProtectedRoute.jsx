import React from "react";
import { Navigate } from "react-router-dom";
import { getRole, hasPermission } from "../utils/permissions";

export default function ProtectedRoute({ requiredPermission, allowedRoles, children }) {
  const role = getRole();

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
