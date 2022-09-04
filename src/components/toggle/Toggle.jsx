import React from "react";

const Toggle = ({ on, onClick, ...rest }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={on}
        className="hidden-input"
        onChange={() => {}}
        onClick={onClick}
      />
      <div
        className={`inline-block w-[75px] h-[41px] relative cursor-pointer rounded-full p-1 transition-all ${
          on ? "bg-green-500" : "bg-gray-300"
        }`}
        {...rest}
      >
        <span
          className={`transition-all w-[33px] h-[33px] bg-white rounded-full inline-block ${
            on ? "translate-x-[34px]" : ""
          }`}
        ></span>
      </div>
    </label>
  );
};

export default Toggle;
