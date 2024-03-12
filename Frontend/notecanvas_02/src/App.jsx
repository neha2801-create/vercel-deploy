import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import MorphingTest from "./components/MorphingTest";
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
    return <LandingPage />;
    // return <LandingPage />;
    // return <LandingPage />;
    // return <CanvasPage />;
    // return <MorphingTest />;
}

export default App;
