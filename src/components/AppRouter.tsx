import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const isAuth = true;
  return (
    <Routes>
      {!isAuth &&
        privateRoutes.map((route) => (
          <>
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
            <Route path="*" element={<Navigate to={route.path} replace />} />
          </>
        ))}
      {isAuth &&
        publicRoutes.map((route) => (
          <>
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
            <Route path="*" element={<Navigate to={route.path} replace />} />
          </>
        ))}
    </Routes>
  );
};

export default AppRouter;
