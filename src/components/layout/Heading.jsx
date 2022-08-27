import React from "react";

const Heading = ({ className = "", children }) => {
  return <h2 className={className}>{children}</h2>;
};

export default Heading;
