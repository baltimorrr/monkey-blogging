import React from "react";
import Button from "../../button/Button";

const DashboardHeader = () => {
  return (
    <div className="bg-white p-5 border-b border-solid border-[#eee] flex justify-end gap-5">
      <Button to="/dashboard" height="52px">
        Write new post
      </Button>
      <div className="header-avatar w-[52px] h-[52px]">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
