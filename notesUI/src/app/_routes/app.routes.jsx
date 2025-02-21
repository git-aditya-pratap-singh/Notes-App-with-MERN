import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../pages/Dashboard";
import ApiRoutesCall from "./api.routes";
import { ProctedRouteGuard, IsloginGuard } from "../_guards/route.guard";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <IsloginGuard>
                <Login />
            </IsloginGuard>
            ),
    },
    {
        path: "/dashboard",
        element: (
            <ProctedRouteGuard>
                <Dashboard />
            </ProctedRouteGuard>
            ),
        loader: new ApiRoutesCall().findGetNotes
    },
    {
        // Catch-all route for 404 errors
        path: "*",
        element: <h1>NOT FOUND!!</h1>
    },

]);

export default router;