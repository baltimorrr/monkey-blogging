import React from "react";

const Field = ({ children }) => {
    return (
        <div className="flex flex-col items-start gap-y-5 mb-10 last:mb-0">
            {children}
        </div>
    );
};

export default Field;
