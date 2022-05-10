import React from "react";

import "../../styles/_table.scss";

const Table = ({ children }) => {
    return (
        <div>
            <table>{children}</table>
        </div>
    );
};

export default Table;
