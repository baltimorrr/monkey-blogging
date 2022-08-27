import React from "react";
import { useController } from "react-hook-form";

const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        {...field}
        {...props}
        className={`w-full ${
          children ? "py-[20px] pr-[60px] pl-[20px]" : "p-5"
        } bg-grayLight rounded-lg font-medium transition-all border border-transparent
                focus:bg-white focus:border-primary placeholder:text-[#84878b]`}
      />
      {children ? (
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
