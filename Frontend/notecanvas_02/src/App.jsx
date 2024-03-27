import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CanvasPage from "./pages/CanvasPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <div>404 not found</div>,
    },
    {
        path: "/canvas",
        element: <CanvasPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
    // return <LandingPage />;
    // return <CanvasPage />;
}

export default App;
