import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { HostelsPage } from "./pages/hostelsPage";
import { HotelsPage } from "./pages/hotelsPage";
import { HousesPage } from "./pages/housesPage";
import { AuthPage } from "./pages/authPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/home/" exact element={<HomePage />} />
        <Route path="/hotels/" exact element={<HotelsPage />} />
        <Route path="/hotels/:id" exact element={<HotelsPage />} />
        <Route path="/hostels/" exact element={<HostelsPage />} />
        <Route path="/houses/" exact element={<HousesPage />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" exact element={<AuthPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }
};
