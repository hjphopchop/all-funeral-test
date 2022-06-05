import React from "react";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Market from "../pages/Market";

export interface Route {
    path: string,
    element: React.FC
}

export enum RouteNames{
    AUTH = "/auth",
    HOME = "/",
    MARKET = "/market"
}

export const publicRoutes: Route[] = [
    {path: RouteNames.HOME, element: Home},
    {path: RouteNames.MARKET, element: Market},
];

export const privateRoutes: Route[] = [
    {path: RouteNames.AUTH, element: Auth}
];