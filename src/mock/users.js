// src/mock/users.js
export const mockUsers = {
  admin: {
    username: "admin",
    password: "mmmaannee",
    role: "admin",
    permissions: [
      "view_financial_profile",
      "view_geo_analytics",
      "view_bank_products",
      "view_group_products",
      "view_settings",
      "view_pii"
    ]
  },

  analyst: {
    username: "analyst",
    password: "1234",
    role: "analyst",
    permissions: [
      "view_financial_profile",
      "view_geo_analytics",
      "view_pii"
    ]
  },

  viewer: {
    username: "viewer",
    password: "1234",
    role: "viewer",
    permissions: [
      "view_bank_products",
      "view_pii"
    ]
  }
};
