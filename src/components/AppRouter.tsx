import React, { Children } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/store";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  return (
    <Routes>
      {!isAuth &&
        Children.toArray(
          privateRoutes?.map((route) => (
            <>
              <Route path={route.path} element={<route.element />} />

              <Route path="*" element={<Navigate to={route.path} replace />} />
            </>
          ))
        )}
      {isAuth &&
        Children.toArray(
          publicRoutes?.map((route) => (
            <>
              <Route path={route.path} element={<route.element />} />
              <Route path="*" element={<Navigate to={route.path} replace />} />
            </>
          ))
        )}
    </Routes>
  );
};

export default AppRouter;
