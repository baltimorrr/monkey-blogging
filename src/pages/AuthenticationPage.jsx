import React from "react";

const AuthenticationPage = ({ children }) => {
  return (
    <div className="container-main min-h-screen p-10">
      <img
        srcSet="logo.png 2x"
        alt="monkey-blogging"
        className="mt-0 mx-auto mb-5"
      />
      <h1 className="text-center text-primary font-bold text-[40px] mb-[60px]">
        Monkey Blogging
      </h1>
      {children}
    </div>
  );
};

export default AuthenticationPage;
