import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import CanvasPage from "./pages/CanvasPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Playground from "./pages/Playground";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CanvasActivePage from "./pages/CanvasActivePage";
import CanvasPageActiveTwo from "./pages/CanvasPageActiveTwo";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <div>404 not found</div>,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/canvas",
        element: (
            <DndProvider backend={HTML5Backend}>
                <CanvasActivePage />
            </DndProvider>
        ),
    },
    {
        path: "/payground",
        element: <Playground />,
    },
]);

function App() {
    // return <RouterProvider router={router} />;
    // return (
    //     <DndProvider backend={HTML5Backend}>
    //         <CanvasActivePage />
    //     </DndProvider>
    // );
    // return <CanvasPage />;
    return <Dashboard />;
}

export default App;
