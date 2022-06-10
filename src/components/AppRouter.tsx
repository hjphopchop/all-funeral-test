import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/store";
import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";
import Market from "../pages/market/Market";
import Services from "../pages/services/Services";
import Company from "../pages/company/Company";
import CompanyList from "../pages/companyList/CompanyList";
import MainLayout from "../layouts/mainLayout/MainLayout";
import MarketLayout from "../layouts/markeyLayout/MarketLayout";

const AppRouter = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  return (
    <Routes>
      {!isAuth && (
        <>
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={<Navigate to={'/auth'} replace />} />
        </>
      )}
      {isAuth && (
        <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="market/" element={<MarketLayout />}>
            <Route index element={<Market />} />
            <Route path="companies" element={<CompanyList />} />
            <Route path="services" element={<Services />} />
            <Route path="companies/:id" element={<Company />} />
          </Route>
        </Route>
         <Route path="*" element={<Navigate to={'/'} replace />} />
        </>
        
      )}
    </Routes>
  );
};

export default AppRouter;
