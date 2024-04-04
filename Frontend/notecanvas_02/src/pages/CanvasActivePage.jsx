import React from "react";
import DropTarget from "../components/note_component/DropTarget";
import UserAvatar from "../components/UserAvatar";

const CanvasActivePage = () => {
    return (
        <div
            style={{
                padding: "20px",
                height: "100vh",
                width: "100vw",
                backgroundColor: "#1E1E1E",
            }}
        >
            {/* Todo: Start with a small space
                Something which grows on adding new space 
            */}

            <UserAvatar />
        </div>
    );
};

export default CanvasActivePage;
